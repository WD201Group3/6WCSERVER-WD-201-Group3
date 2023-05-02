<template>
    <div>
    <div class="tagline">
        <div class="message">
            <h5>Ensure and get the best dermatology care with</h5>
            <h1>LUMINOUS</h1>
            <p><br>From dermatologist-formulated products to specialized <br>services, we offer personalized skincare to meet your needs on<br> any given day
            and provide a comprehensive range of the <br>most advanced and comfortable solutions to enhance the skin<br> and reduce the appearance of imperfections
            for a more radiant,<br> youthful, smoother, and blemish-free complexion.</p>
            <router-link to="/view" id="rl">Appointments</router-link> 
            <router-link to="/mkApmt" id="rl" class="mappointments"><i class="fa fa-check-square-o"></i> Make Appointments</router-link>
        </div>
    </div>
        <div class="services">
            <section class="service-grid pb-5 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 text-center mb-4">
                    <div class="service-title">
                        <h4 class="main">Our Services</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 text-center mb-3">
                    <div class="service-wrap">
                        <h2>SCAR TREATMENT</h2>
                        <p><br>Get rid of unwanted scars with our expert treatments</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-3">
                    <div class="service-wrap">
                        <h2>ACNE TREATMENT</h2>
                        <p><br>Get rid of your acne through our expert treatments</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-3">
                    <div class="service-wrap">
                        <h2>SKIN LIGHTENING</h2>
                        <p><br>Make your skin naturally fairer and brighter through our treatments</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-3">
                    <div class="service-wrap">
                        <h2>DEEP SKIN HYDRATION</h2>
                        <p><br>Moisturize and smoothen your skin with our expert treatments</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-3">
                    <div class="service-wrap">
                        <h2>NON-SURGICAL RHINOPLASTY</h2>
                        <p><br>Nose reshaping that’s quick, safe, and effective with our experts</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center mb-3">
                    <div class="service-wrap">
                        <h2 >MEDICAL DERMATOLOGY</h2>
                        <p><br>Consult with us with our expert and have the skin that you want</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    
</div>
    
</template>


<style scoped>
@import url("@fontsource/montserrat/700.css");
@import url("@fontsource/alata/400.css");
.tagline{
    z-index: 10;
    height: 100%;
    width: 100%;
    min-height: 200%;
    background: white;
    position: relative;
    display: grid;
    background-image: url(../assets/derma3.jpg);
    background-size: cover;
    background-repeat: repeat;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
    padding: 10% 10%;
    font-family: alata;

}
.message h5{
    font-size: 20px;
    font-weight: 400;
    color: #cc4b6c;
    margin-bottom: 40px;
}
.message h1{
    font-family: montserrat;
    font-size: 110px;
    line-height: 1;
    /* color:#cc4b6c; */
    color: #0b457e;

}
/* .message h1 span{
    -webkit-text-fill-color: transparent;
	-webkit-text-stroke: 6px ghostwhite
} */
.message p{
    color: #1f003b;
    font-size: 15px;
    line-height: 1.9;
    margin-bottom: 40px;
    margin-right: 2em;
}
#rl{
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
    font-family: montserrat;
}
#rl:hover{
    background: transparent;
    border: 1px solid white;
    transform: scale(1.09);
}
#rl:active{
    background: #cc4b6c;
    border: 1px solid #cc4b6c;}
#rl.mappointments{
    background: transparent;
    color: #0b457e;;
    border: 2px solid #0b457e;
    margin-left: 20px;
}
#rl.maapointments i{
    vertical-align: middle;
    margin-right: 5px;
}
#rl.maapointments:hover{
    background: transparent;
    border: 1px solid #0b457e;
    transform: scale(1.09);
}

.tagline{
    z-index: 10;
    height: 100%;
    width: 100%;
    min-height: 200%;
    background: white;
    position: relative;
    display: grid;
    background-image: url(../assets/derma6.jpg);
    background-size: cover;
    background-repeat: repeat;
    background-position: right;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2rem;
    padding: 10% 10%;
    font-family: alata;

}


.service-grid {
  /* background: #e3f4ff; */
  background-image: url(../assets/derma7.jpeg);
}
.service-title h4 {
  position: relative;
  display: inline-block;
  font-family: 'Montserrat';

}
h2{font-family: 'montserrat';
    font-size: 30px;
    text-transform: uppercase;
    color: #04020a;}

.main{ font-size: 50px; 
  text-transform: uppercase;
}

.service-icon {
  position: relative;
}
.service-title p {
  padding: 0 190px;
  margin-bottom: 10px;
}
.about-info-text h2 {
  margin-bottom: 23px;
  text-transform: capitalize;
  font-weight: 700;
  line-height: .9;
}
.about-info-text p {
  padding: 0 100px;
  font-size: 18px;
  margin-bottom: 26px;
    position: relative;
}
.about-content p {
  margin-bottom: 0;
}
.about-info-text a {
  margin-bottom: 20px;
    position: relative;
}
.service-wrap {
    border: 0px solid #e6e6e6;
    padding: 50px 30px;
    position: relative;
    border-radius: 30px;
    box-shadow: 0 .4rem .8rem #0005;
    margin: 2em 0;
    height: 15em;
}

.service-wrap p{
    position: relative;
}

/* Hover */

.service-wrap:hover {
  background-image: url(../assets/derma6.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: local;
  transition: all .5s;
  border-radius: 30px;
  border-radius: 30px;
}

.service-wrap:hover:before {
  background: rgba(0, 0, 0, 0.2901960784313726);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0px;
  content: "";
  top: 0;
  border-radius: 30px;
  opacity: 1;
}


.service-wrap:hover h4, .service-wrap:hover p{
  color: #fff;
}

.service-wrap h4 {
    font-weight: 600;
    color: #1e2331;
    margin-bottom: 17px;
    font-size: 18px;
    text-transform: capitalize;
    position: relative;
    
}
.service-wrap a {
  font-size: 14px;
  font-weight: 600;
    position: relative;
    transition: all 1s ease;

}
</style>