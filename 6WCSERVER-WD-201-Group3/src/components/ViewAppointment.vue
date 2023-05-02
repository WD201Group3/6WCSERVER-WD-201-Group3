<template>
    <div class="body">
        <div class="table">
            <div class="table_header">
                <h1>Appointments</h1>
            </div>
            <div class="table_body">
                <table>
                    <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Contact No.</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="client in Clients" :key="client._id">
                            <td>{{ client.lastname }}</td>
                            <td>{{ client.firstname }}</td>
                            <td>{{ client.email }}</td>
                            <td>{{ client.contact }}</td>
                            <td>{{ client.date }}</td>
                            <td class="action">
                                <router-link :to="{name: 'edit', params: { id: client._id }}" class="btn btn-success" id="btn1"><i class="fa fa-edit" style="font-size:24px"></i></router-link> 
                                <button @click.prevent="deleteClient(client._id)" class="btn btn-danger" id="btn2"><i class="fa fa-remove" style="font-size:24px"></i></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Clients: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Clients = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteClient(id){
                let apiURL = `http://localhost:4000/api/delete-client/${id}`;
                let indexOfArrayItem = this.Clients.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Clients.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
div.body{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/derma7.jpeg);
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
    
}
div.table{
    width: 82vw;
    height: 90vh;
    background-color: #fff5;
    backdrop-filter: blur(9px);
    box-shadow: 0 .4rem .8rem #0005;
    border-radius: 30px;
    overflow: hidden;
    border-collapse: collapse;
}
div.table_header{
    width: 100%;
    height: 10%;
    background-color: #fff4;
    padding: .8rem 1rem;

}

div.table_body{
    width: 95%;
    max-height: calc(89% - .8em);
    background-color: rgba(216, 228, 237, 0.5);
    margin: 0.8rem auto;
    border-radius: 0.6rem;
    overflow: auto;
}
div.table_body::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}
div.table_body::-webkit-scrollbar-thumb{
    border-radius: 0.5rem;
    background-color: #0004;
    visibility: hidden;
}
div.table_body:hover::-webkit-scrollbar-thumb{
    visibility: visible;
}
table{
    width: 100%;
}
table, th, td{
    border-collapse: collapse;
    padding: 1rem;
    text-align: left;
}
thead{
    background-color: none;
}
thead th{
    position: sticky;
    top: 0;
    left: 0;
    background-color: #d5d1defe;
}
tbody tr:nth-child(even){
    background-color: #0000000b;
}
tbody tr:hover{
    background-color: #fff6;
}
#btn1, #btn2{
    display: inline-block;
    margin-right: 0.5em;
    border: 2px solid;
    border-radius: 25px;
    transition: all .55s ease;
    width: 3em;
    height: 3em;
    box-shadow: 0 .1rem .2rem #0005;
}
#btn2{
    color: #ad1010;
    background: transparent;
    padding: 4px;
}
#btn1{
    color: #2a6944;
    background: transparent;
    padding: 12px 3px 4px 5px;
}
#btn1:hover, #btn2:hover{
    transform: scale(1.09);
}
@media (max-width: 1000px){
    td:not(:first-of-type){
        min-width: 12.1rem;
    }
}
</style>