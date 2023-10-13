/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ForeverCircle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./ForeverCircle/costumes/1.svg", {
        x: 64.93420653351305,
        y: 64.934235
      }),
      new Costume("2", "./ForeverCircle/costumes/2.svg", {
        x: 64.93421153351306,
        y: 64.934255
      }),
      new Costume("3", "./ForeverCircle/costumes/3.svg", { x: 64.5, y: 64.5 }),
      new Costume("4", "./ForeverCircle/costumes/4.svg", { x: 64.5, y: 64.5 }),
      new Costume("5", "./ForeverCircle/costumes/5.svg", {
        x: 64.93421384450434,
        y: 64.934275
      }),
      new Costume("6", "./ForeverCircle/costumes/6.svg", {
        x: 123.43420884450435,
        y: 123.4344011321874
      }),
      new Costume("7", "./ForeverCircle/costumes/7.svg", {
        x: 77.9342088445043,
        y: 77.93433025159722
      }),
      new Costume("8", "./ForeverCircle/costumes/8.svg", {
        x: 59.25,
        y: 61.416664999999995
      }),
      new Costume("9", "./ForeverCircle/costumes/9.svg", {
        x: 64.93420884450435,
        y: 64.93431
      }),
      new Costume("10", "./ForeverCircle/costumes/10.svg", {
        x: 65.93421384450434,
        y: 65.934255
      }),
      new Costume("11", "./ForeverCircle/costumes/11.svg", {
        x: 87,
        y: 78.104375
      }),
      new Costume("12", "./ForeverCircle/costumes/12.svg", {
        x: 152.4973090478186,
        y: 152.49756000000008
      }),
      new Costume("13", "./ForeverCircle/costumes/13.svg", {
        x: 76.57432499999999,
        y: 74.046275
      }),
      new Costume("14", "./ForeverCircle/costumes/14.svg", {
        x: 76.57432499999999,
        y: 74.04626499999999
      }),
      new Costume("15", "./ForeverCircle/costumes/15.svg", {
        x: 70.75,
        y: 70.75
      }),
      new Costume("17", "./ForeverCircle/costumes/17.svg", {
        x: 70.7443282478184,
        y: 70.75
      }),
      new Costume("19", "./ForeverCircle/costumes/19.svg", {
        x: 54.68815691265064,
        y: 54.68814691265062
      }),
      new Costume("16", "./ForeverCircle/costumes/16.svg", {
        x: 70.75,
        y: 70.75
      }),
      new Costume("18", "./ForeverCircle/costumes/18.svg", {
        x: 64.93420884450435,
        y: 64.93431
      }),
      new Costume("20", "./ForeverCircle/costumes/20.svg", {
        x: 59.05002999999999,
        y: 59.38790840340711
      }),
      new Costume("21", "./ForeverCircle/costumes/21.svg", {
        x: 72.43813499999999,
        y: 72.438135
      }),
      new Costume("22", "./ForeverCircle/costumes/22.svg", {
        x: 76.47668475363844,
        y: 76.23441049587964
      })
    ];

    this.sounds = [new Sound("Meow", "./ForeverCircle/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(100 * Math.sin(this.degToRad(50 * this.timer)), -100);
      this.direction = 20 * Math.cos(this.degToRad(80 * this.timer));
      this.effects.color += 3;
      this.createClone();
      yield;
    }
  }

  *startAsClone() {
    for (let i = 0; i < 150; i++) {
      this.y += 2;
      this.direction -= this.x / 150;
      this.effects.ghost += 1;
      yield;
    }
    this.deleteThisClone();
  }

  *whenKeySpacePressed() {
    this.costumeNumber++;
  }

  *whenKeyRightArrowPressed() {
    this.costumeNumber++;
  }

  *whenthisspriteclicked() {
    this.costumeNumber++;
  }
}
