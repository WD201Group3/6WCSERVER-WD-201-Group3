<template>
    <div class="contact_body">
        <section>
            <div class="row">
                <h1>Contacts</h1>
            </div>
            <!-- card 1 -->
            <div class="row">
                <div class="column">
                    <div class="card">
                        <div class="img-con">
                            <img src="../assets/3.png"/>
                        </div>
                        <h3><br><br>KRISTINE JOY DAQUIL</h3>
                        <p>Developer</p>
                        <div class="icons">
                            <a href="https://www.facebook.com/khiaradane.peralta"><i class="fa fa-facebook-square" style="font-size:48px"></i></a>
                            <a href="https://github.com/Kdacquil"><i class="fa fa-github-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-linkedin-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-twitter-square" style="font-size:48px"></i></a>
                        </div>
                    </div>
                </div>
            <!-- card 2 -->
                <div class="column">
                    <div class="card">
                        <div class="img-con">
                            <img src="../assets/5.png"/>
                        </div>
                        <h3><br><br>DAYSON DELFIN</h3>
                        <p>Developer</p>
                        <div class="icons">
                            <a href="https://www.facebook.com/dayson.delfin"><i class="fa fa-facebook-square" style="font-size:48px"></i></a>
                            <a href="https://github.com/DLDelfin"><i class="fa fa-github-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-linkedin-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-twitter-square" style="font-size:48px"></i></a>
                        </div>
                    </div>
                </div>
            <!-- card 3 -->
                <div class="column">
                    <div class="card">
                        <div class="img-con">
                            <img src="../assets/4.png"/>
                        </div>
                        <h3><br><br>LOUIS JAE GARCIA</h3>
                        <p>Developer</p>
                        <div class="icons">
                            <a href="https://www.facebook.com/louisjae.garcia"><i class="fa fa-facebook-square" style="font-size:48px"></i></a>
                            <a href="https://github.com/Skzlly"><i class="fa fa-github-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-linkedin-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-twitter-square" style="font-size:48px"></i></a>
                        </div>
                    </div>
                </div>
           
            <!-- card 4 -->
                <div class="column" id="botcard">
                    <div class="card">
                        <div class="img-con">
                            <img src="../assets/1.png"/>
                        </div>
                        <h3><br><br>CHARMAGNE DALE MANIAGO</h3>
                        <p>Developer</p>
                        <div class="icons">
                            <a href="#"><i class="fa fa-facebook-square" style="font-size:48px"></i></a>
                            <a href="https://github.com/MmasssXklr"><i class="fa fa-github-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-linkedin-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-twitter-square" style="font-size:48px"></i></a>
                        </div>
                    </div>
                </div>
            <!-- card 5 -->
                <div class="column" id="botcard">
                    <div class="card">
                        <div class="img-con">
                            <img src="../assets/2.png"/>
                        </div>
                        <h3><br><br>NICKAELLA NOTRA</h3>
                        <p>Developer</p>
                        <div class="icons">
                            <a href="https://www.facebook.com/MmasssXKLR/"><i class="fa fa-facebook-square" style="font-size:48px"></i></a>
                            <a href="https://github.com/Nickaella-Notra"><i class="fa fa-github-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-linkedin-square" style="font-size:48px"></i></a>
                            <a href="#"><i class="fa fa-twitter-square" style="font-size:48px"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>    
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

div.contact_body{
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(../assets/derma7.jpeg);
    background-size: cover;
    background-repeat: repeat;
    background-position: center;
}
.row{
    display: flex;
    flex-wrap: wrap;
    padding: 2em 1em;
    text-align: center;
}
.column{
    width: 100%;
    padding: 0.3em 6em;
}
h1{
    width: 20%;
    text-align: center;
    font-size: 2.5em;
    color: #1f003b;
    background-color: #fff5;
    backdrop-filter: blur(9px);
    padding: 0.5em 0;
    margin: 1% 2.5% 0 2.5%;
    width: 10em;
    border-radius: 25px;
    box-shadow: 0 .4rem .8rem #0005;
}
.card{
    max-width: 50em;
    box-shadow: 0 .4rem .8rem #0005;
    padding: 5em 0;
    border-radius: 30px;
    color: #1f003b;
    cursor: pointer;
    box-shadow: 0 .4rem .8rem #0005;
    background-color: #fff5;
    backdrop-filter: blur(9px);
    margin: 2em 2em;
}
.card img{
    width: 50%;
    border-radius: 50%;
    opacity: 0.9;
}
.card h3{
    font-weight: 500;
}
.card p{
    font-weight: 300;
    text-transform: uppercase;
    margin: 0.5em 0 2em 0;
    letter-spacing: 2px;
}
.icons{
    width: 50%;
    min-width: 180px;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.card a{
    text-decoration: none;
    color: inherit;
    font-size: 1.4em;
}
.card:hover{
    background: #ffffff;
    color: #0b457e;
    transition: all 0.5s ease;
}
.icons a:hover{
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
}
.card:hover .img-con{
    transform: scale(1.15);
    transition: all 0.5s ease-in-out;
}
#botcard{
    justify-content: center;
    align-items: center;
}

@media (min-width: 1300px){
    section{
        padding: 1em 7em;
    }
    .column{
        flex: 0 0 33.33%;
        max-width: 33.33%;
        padding: 0 1em;
    }
}
</style>
