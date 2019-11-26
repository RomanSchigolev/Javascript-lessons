class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
    this.$el.addEventListener('click', (event) => {
      console.log('Fired');
    });
  }

  hide() {
    this.$el.style.opacity = '0';
  }

  show() {
    this.$el.style.opacity = '1';
  }
}

class Figure extends Component {
  constructor(options) {
    super(options.selector);
    this.$el.style.width = this.$el.style.height = `${options.size}px`;
    this.$el.style.backgroundColor = options.color;
    this.$el.style.transition = options.transition;
  }
}

const box1 = new Figure({
  selector: '#box1',
  size: 200,
  color: '#000000',
  transition: '0.3s'
});

const box2 = new Figure({
  selector: '#box2',
  size: 200,
  color: '#a93b74',
  transition: '0.3s'
});

class Circle extends Figure {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = `${options.border}%`;
  }
}

const circle = new Circle({
  selector: '#circle1',
  size: 200,
  color: '#414ca9',
  transition: '0.3s',
  border: 50,
});


let bubble1, bubble2;

function setup() {
  createCanvas(600, 500);
  bubble1 = new Bubble({
    x: 200,
    y: 150
  });
  bubble2 = new Bubble({
    x: 300,
    y: 250
  });
  print(bubble1.x, bubble1.y);
  print(bubble2.x, bubble2.y);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  constructor(value) {
    this.x = value.x;
    this.y = value.y;
  }

  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }

  show() {
    stroke(255);
    strokeWeight(3);
    noFill();
    ellipse(this.x, this.y, 40, 40);
  }
}
