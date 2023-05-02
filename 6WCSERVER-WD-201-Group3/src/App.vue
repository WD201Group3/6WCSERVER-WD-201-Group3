<template>

  <div>
    <nav>
		<input type="checkbox" id="check">
		<label for="check" class="checkbtn">
			<i class="fas fa-bars"></i>
		</label>
		<router-link to = "/home" class = "logo">LUMINOUS</router-link>
		<ul>
			<li class = active ><router-link to="/home" id="rl">HOME</router-link></li>
			<li><router-link to="/reviews" id="rl" >REVIEWS</router-link></li>
			<li><router-link to="/contacts" id="rl">CONTACT</router-link></li>
			<li><router-link to="/view" id="rl">APPOINTMENTS</router-link></li>
			<li><router-link to="/mkApmt" id="rl">MAKE APPOINTMENT</router-link></li>
		</ul>
	</nav>

    <!-- Router view -->
	<router-view/>
	
  </div>

</template>

<script>

</script>


<style scoped>
@import url("@fontsource/montserrat/700.css");
*{
	padding: 0;
	margin: 0;
	text-decoration: none;
	list-style: none;
	box-sizing: border-box;
	z-index: 100;
	/* font-family: alata; */
}
div{
	/* background-image: url(./assets/derma.jpg);
	background-size: cover; */
	font-family: montserrat;
	
}
nav{
	position: sticky;
	background: #669cb9;
	height: 80px;
	font-weight: 100%;
	backdrop-filter: blur(9px);
	box-shadow: 0 0.2rem 5rem #0005;
}
.logo{
	color: #0b457e;
	font-size: 35px;
	line-height: 80px;
	padding: 0 100px;
	font-weight: bold;
	transition: all 1s;
}
.logo:hover{
	color: white;
	transition: 0.5s;
}
nav ul{
	float: right;
	margin-right: 20px;
}
nav ul li{
	display: inline-block;
	line-height: 80px;
	margin: 0 5px;
	padding-right: 1em;
}
#rl{
	color: white;
	font-size: 17px;
	border-radius: 3px;
	text-transform: uppercase;
 }
#rl:hover{
	color: #0b457e;
	transition: all 0.5s;
	opacity: 0.8;
}
#rl::after{
	content: '';
	width: 0%;
	height: 4px;
	background: #0b457e;
	display: block;
	margin-top: -1.5em;
	transition: 0.5s ease}
#rl:hover::after{
	content: '';
	width: 100%;
	height: 4px;
	background: white;
	display: block;
	margin-top: -1.5em;
	padding: 0;
	border-radius: 30px;
}
.checkbtn{
	font-size: 30px;
	color: white;
	float: right;
	line-height: 80px;
	margin-right: 40px;
	cursor: pointer;
	display: none;
 }
 #check{
	display: none;
 }
 @media (max-width: 952px){
	.logo{
		font-size: 20px;
		padding-left: 40px;
		transition: all 1s;
	}
	#rl{
		font-size: 16px;
	}
}
@media (max-width: 1300px){
	.checkbtn{
		display: block;
		transition: all 1s ease;
	}
	ul{
		position: fixed;
		width: 100%;
		height: 100vh;
		background-color: rgba(11, 69, 126, 0.30);
		backdrop-filter: blur(8px);
		top: 80px;
		left: -100%;
		text-align: center;
		transition: all 0.5s ease;
		padding: 10% 30%;
	}
	nav ul li{
		display: block;
	}
	#rl{
		font-size: 20px;
	}
	#rl:hover,#rl:active{
		background: none;
	}
	#check:checked ~ul{
		left:0;
	}
}
</style>



