function setup() {
  canvas=createCanvas(300, 300);
  canvas.center();
  canvas.position(190,170)
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
  console.log("model is loaded");
}

function gotPoses(results)
{
  if (results.length > 0)
    {
      console.log(results);
      
      console.log("x position of nose = " + results[0].pose.nose.x);
      
      console.log("y position of nose = " + results[0].pose.nose.y);
    }
  
}

function draw() {
  background(220);
  image(video, 0, 0, 300, 300);
}





function take_snapshot()
{
  save("ImageFilter.png")
}