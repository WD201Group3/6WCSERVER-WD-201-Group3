<template>
    <div class="body">
        <div class="container">
        <div class="title">UPDATE APPOINTMENT REQUEST</div>
            <form @submit.prevent="handleUpdateForm" action>
                    <div class = "userdetails">
                        <div class="form-group">
                            <span class="details">LAST NAME</span>
                            <input type="text" v-model="client.lastname" placeholder="Enter your last name" required>
                        </div>
                        <div class="form-group">
                            <span class="details">FIRST NAME</span>
                            <input type="text" v-model="client.firstname" placeholder="Enter your first name" required>
                        </div>
                        <div class="form-group">
                            <span class="details">EMAIL</span>
                            <input type="text" v-model="client.firstname" placeholder="Enter your email" required>
                        </div>
                        <div class="form-group">
                            <span class="details">CONTACT NUMBER</span>
                            <input type="text" v-model="client.contact" placeholder="Enter your contact no" required>
                        </div>
                        <div class="form-group">
                            <span class="details">APPOINTMENT DATE</span>
                            <input type="datetime-local" v-model="client.date" name="date" class="box" required>
                        </div>
                        <div class="form-group">
                            <button id="sendBtn2">UPDATE APPOINTMENT REQUEST</button>
                        </div>
                    </div>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            client: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-client/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.client = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-client/${this.$route.params.id}`;
            axios.put(apiURL, this.client).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>

<style scoped>
@import url("@fontsource/alata/400.css");
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: alata; */
    
}
div.body{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/derma8.jpg);
    background-size: cover;
    background-repeat: repeat;
}
.container{
    margin-top: 2em;
    max-width: 500vh;
    width: 100%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 30px;
    opacity: 0.8;
    margin: 0 15% 0 15% ;
    box-shadow: 0 .4rem .8rem #0005;
}
.container .title{
    font-size: 25px;
    font-weight: 500;
    position: relative;
}
.container .title::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background: #cc4b6c;
}
.container form .userdetails{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0 12px 0;
}
form .userdetails .form-group{
    flex-wrap: wrap;
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
    transition: all 0.5s ease;
}
.userdetails .form-group details{
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
}
.userdetails .form-group input{
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 2px solid #ccc;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    /* transition: all 0.3s ease; */
}
.userdetails .form-group input:focus,
.userdetails .form-group input:valid{
    border-color: #cc4b6c;
}

@media (max-width: 984px){
    .container{
        max-width: 100%;
        transition: all 5s ease;
    }
    form .userdetails .form-group{
        margin-bottom: 15px;
        width: 100%;
        transition: all 0.5s ease;
    }
}

/* .container{
	margin-left: 38%;
	position: relative;
	margin-top: 130px;
	width: 480px;
	min-height: 40em;
	opacity: 0.8;
	background: ghostwhite;
	color: black;}
form input{
    display: block;
	font-size: 30px;
	text-align: left;
	color: #231F20;
	background: ghostwhite;
	height: 40px;
	width: 350px;
	padding: 0 5px;
	outline: none;
	border: 1px solid #231F20;} */

#sendBtn2{
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: inline-block;
    color: white;
    background: #cc4b6c;
    border: 1px solid transparent;
    padding: 12px 30px;
    line-height: 1.4;
    font-size: 14px;
    font-weight: 500;
    border-radius: 30px;
    text-transform: uppercase;
    transition: all .55s ease;
    text-decoration: none;
    box-shadow: 0 .2rem .4rem #0005;
}
#sendBtn2:hover{
    color: #cc4b6c;
    background: transparent;
    border: 1px solid #cc4b6c;
    transition: all 1s ease;
}
#sendBtn2:active{
    background: #cc4b6c;
    border: 1px solid #cc4b6c;
}

</style>