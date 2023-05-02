<template>

    <div class="body">
        <div class="container">
        <div class="title">APPOINTMENT REQUEST</div>
            <form @submit.prevent="handleSubmitForm">
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
                            <input type="email" v-model="client.email" placeholder="Enter your email" required>
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
                            <button id="sendBtn">SEND APPOINTMENT REQUEST</button>
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
                client: {
                   lastname: '',
                   firstname: '',
                   email: '',
                   contact: '',
                   date: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-client';
                
                axios.post(apiURL, this.client).then(() => {
                  this.$router.push('/view')
                  this.client = {
                    lastname: '',
                    firstname: '',
                    email: '',
                    contact: '',
                    date: ''
                }
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
    
}
div.body{
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/derma7.jpeg);
    background-size: cover;
    background-repeat: repeat;
}
.container{
    margin-top: 2em;
    max-width: 500vh;
    width: 100%;
    padding: 25px 30px;
    border-radius: 30px;
    opacity: 0.8;
    margin: 0 15% 0 15% ;
    box-shadow: 0 .4rem .8rem #0005;
    background-color: #fff5;
    backdrop-filter: blur(9px);
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
    background: #0b457e;
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
    background-color: #fff5;
    backdrop-filter: blur(9px);
}
.userdetails .form-group input:focus,
.userdetails .form-group input:valid{
    border-color: #0b457e;
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


#sendBtn{
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: inline-block;
    color: white;
    background: #0b457e;
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
#sendBtn:hover{
    color: #0b457e;
    background: transparent;
    border: 1px solid #0b457e;
    transition: all 1s ease;
}
#sendBtn:active{
    background: #0b457e;
    border: 1px solid #0b457e;
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
</style>