let input;
let slider;
let button;
let dropdown;
let isBouncing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(10, 10);
  input.value('淡江大學');
  
  slider = createSlider(20, 50, 32); //滑桿範圍
  slider.position(input.x + input.width + 10, 10);
  
  button = createButton('跳動');
  button.position(slider.x + slider.width + 10, 10);
  button.mousePressed(toggleBounce);
  button.size(100,50);
  
  dropdown = createSelect();
  dropdown.position(button.x + button.width + 10, 10);
  dropdown.option('第三周作品');
  dropdown.option('教育科技學系');
  dropdown.option('第三周講義');
  dropdown.changed(handleDropdownChange);
}

function toggleBounce() {
  isBouncing = !isBouncing;
}

function handleDropdownChange() {
  let selected = dropdown.value();
  if (selected === '第三周作品') {
    window.open('https://chia1204.github.io/20250303/', '_blank');
  } else if (selected === '教育科技學系') {
    window.open('https://www.et.tku.edu.tw', '_blank');
  } else if (selected === '第三周講義') {
    window.open('https://hackmd.io/@GWnAY8lqQFec-HSjPRuGkw/SJz8QFzjyg', '_blank');
  }
}

function draw() {
  background(220);
  let inputText = input.value();
  let displayText = inputText.split('').join(' '); // 中間的文字間隔
  textAlign(CENTER, CENTER);
  textSize(slider.value());
  
  let leftPositions = [];
  let rightPositions = [];
  
  for (let i = 10; i < width / 2; i += 40) {
    leftPositions.push(i);
    rightPositions.push(width - i);
  }
  
  let lineHeight = textAscent() + textDescent() + 10; // 計算行高，增加額外間距
  let y = 0;
  
  while (y < height) {
    let offsetY = isBouncing ? random(-5, 5) : 0;
    text(displayText, width / 2, y + offsetY);
    for (let x of leftPositions) {
      text(displayText, x, y + offsetY); // 左側顯示
    }
    for (let x of rightPositions) {
      text(displayText, x, y + offsetY); // 右側顯示
    }
    y += lineHeight;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
