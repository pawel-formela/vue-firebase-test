<template>
    <div id="app">
        <div>
            <label for="">Name</label>
            <input type="text" v-model="name">
            <button @click="submitName">Add</button>
        </div>
        <div>
            <ul>
                <li v-for="personName in names" :key="personName['.key']">
                    <div v-if="!personName.edit">
                        <p>{{personName.name}}</p>
                        <button @click="removeName(personName['.key'])">Remove</button>
                        <button @click="setEditName(personName['.key'])">Edit</button>
                    </div>
                    <div v-else="">
                        <input type="text" v-model="personName.name">
                        <button @click="saveEdit(personName)">Save</button>
                        <button @click="cancleEdit(personName['.key'])">Cancle</button>
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {namesRef} from './firebase'

    export default {
        data() {
            return {
                name: ''
            }
        },
        firebase: {
            names: namesRef
        },
        methods: {
            saveEdit(person) {
                const key = person['.key'];
                namesRef.child(key).set({edit: false, name: person.name});

            },
            cancleEdit(key) {

                namesRef.child(key).update({edit: false});
            },
            submitName() {
                namesRef.push({name: this.name, edit: false})
                this.name = '';
            },
            removeName(key) {
                namesRef.child(key).remove();
            },
            setEditName(key) {
                namesRef.child(key).update({edit: true});
            }

        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    button {
        background-color: transparent;
        border: 2px solid black;
    }
</style>
