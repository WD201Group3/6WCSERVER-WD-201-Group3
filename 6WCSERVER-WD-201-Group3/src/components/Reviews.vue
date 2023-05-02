<template>
    <div class="review_body">
        <figure class="snip1139">
  <blockquote>I enjoyed getting my skin done here. This website is the bomb and I would go again and again yaherherr!!
    <div class="arrow"></div>
  </blockquote>
  <img src="../assets/rev1.png" alt="sample3"/>
  <div class="author">
    <h5>Son Chaeyoung <span>- Deep Skin Hydration</span></h5>
  </div>
</figure>
<figure class="snip1139 hover">
  <blockquote>Getting treatment here is the real deal, I love my skin now and will come back for more. Again this dermotologies right here are crazy good.
    <div class="arrow"></div>
  </blockquote>
  <img src="https://w0.peakpx.com/wallpaper/152/557/HD-wallpaper-sana-girl-twice-lips.jpg" alt="sample47"/>
  <div class="author">
    <h5>Minatozaki Sana <span>- Acne Treatment</span></h5>
  </div>
</figure>
<figure class="snip1139">
  <blockquote> I recommend these experts right here because they the real homies right here. Look at my freakin skin man glowing af!.
    <div class="arrow"></div>
  </blockquote>
  <img src="https://love4everkm.files.wordpress.com/2020/09/dahyun-5.jpg" alt="sample17"/>
  <div class="author">
    <h5>Kim Dahyun<span>- Skin Lightening</span></h5>
  </div>
</figure>
    </div>
</template>

<style>
/* Icon set - http://ionicons.com/ */
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);

figure.snip1139 {

    font-family: 'Raleway', Arial, sans-serif;
    position: relative;
    overflow: hidden;
    margin: 10px;
    min-width: 220px;
    max-width: 310px;
    width: 100%;
    color: #333;
    text-align: left;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    box-shadow: 0 .4rem .8rem #0005;
}
figure.snip1139:hover{
    transform: scale(1.05);
    transition: all 0.5s ease;
}
figure.snip1139 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}
figure.snip1139 img {
  max-width: 100%;
  vertical-align: middle;
}
figure.snip1139 blockquote {
    position: relative;
    background-color: #ffffff;
    box-shadow: 0 .4rem .8rem #0005;
    padding: 25px 50px 25px 50px;
    font-size: 0.8em;
    font-weight: 500;
    text-align: left;
    margin: 0;
    line-height: 1.6em;
    font-style: italic;
}
figure.snip1139 blockquote:before,
figure.snip1139 blockquote:after {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}
figure.snip1139 blockquote:before {
  top: 25px;
  left: 20px;
}
figure.snip1139 blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0;
}
figure.snip1139 .arrow {
  top: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #ffffff;
  margin: 0;
  position: absolute;
}
figure.snip1139 .author {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 25px;
  color: #000000;
  background-color: #ffffff;
  margin: 0;
  text-transform: uppercase;
  
}
figure.snip1139 .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
}
figure.snip1139 .author h5 span {
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;
}
/* Demo purposes only */
.review_body{
    background-image: url(../assets/derma7.jpeg);
    background-size: cover;
    background-repeat: repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em 0;
    min-height: 100vh;
}



/* @import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
@import url(https://fonts.googleapis.com/css?family=Raleway:400,800);
div.fig{
  font-family: 'Raleway', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
div.fig * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}
div.fig img {
  max-width: 100%;
  vertical-align: middle;
}
div.fig blockquote {
  position: relative;
  background-color: #ffffff;
  padding: 25px 50px 25px 50px;
  font-size: 0.8em;
  font-weight: 500;
  text-align: left;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
}
div.fig blockquote:before,
div.fig blockquote:after {
  font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
}
div.fig blockquote:before {
  top: 25px;
  left: 20px;
}
div.fig blockquote:after {
  content: "\201D";
  right: 20px;
  bottom: 0;
}
div.fig .arrow {
  top: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #ffffff;
  margin: 0;
  position: absolute;
}
div.fig .author {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 25px;
  color: #000000;
  background-color: #ffffff;
  margin: 0;
  text-transform: uppercase;
}
div.fig .author h5 {
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
}
div.fig .author h5 span {
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;
}
/* Demo purposes only */
/* .review_body{background-color: #212121} */ 


/* Demo purposes only */
/* // html {
//   height: 100%;
// }
// body {
//   background-color: #212121;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-flow: wrap;
//   margin: 0;
//   height: 100%;
// } */

</style>