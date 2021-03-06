  var rectangle1 = new Rectangle(new Point(50,50), new Point(400,500));
  var cornersize = new Size(10, 10);
  var path = new Path.RoundRectangle(rectangle1, cornersize);
  path.fillColor = "#EAF1F4";
  path.strokeColor = "#E06C72";
  path.strokeWidth = 4;

  var text1 = new PointText(new Point(220, 100));
  text1.justification = "center";
  text1.fillColor = "black";
  text1.content = "User";


  var rectangle2 = new Rectangle(new Point(700,50), new Point(1050,500));
  var cornersize = new Size(10, 10);
  var path = new Path.RoundRectangle(rectangle2, cornersize);
  path.fillColor = "#EAF1F4";
  path.strokeColor = "#E06C72";
  path.strokeWidth = 4;

  var text2 = new PointText(new Point(850, 100));
  text2.justification = "center";
  text2.fillColor = "black";
  text2.content = "Tweets";

  var from = new Point(400, 250);
  var to = new Point(700, 250);
  var line = new Path.Line(from, to);
  line.strokeColor = "#E06C72";
  line.strokeWidth = 4;

  var text = new PointText(new Point(550, 200));
  text.justification = "center";
  text.fillColor = "black";
  text.content = "One to many";
