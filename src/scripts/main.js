'use strict';

document.querySelector('.startPlaying').onclick = () => {
  document.querySelector('.start').style.display = 'none';
  startGame();
};

document.querySelector('.playAgain').onclick = () => {
  document.querySelector('#loseBlock').style.display = 'none';
  startGame();
};

function startGame() {
  let isWasted = false;
  let cleaner = setInterval(() => {
    if (isWasted) {
      clearInterval(complicator);
      removeEventListener('keydown', keydown);
      removeEventListener('mousemove', rotate);
      removeEventListener('mousedown', mousedown);
      removeEventListener('keydown', keydownSpace);
      clearInterval(boxCreator);
      clearInterval(cleaner);
    }
  }, 0);


  let flatSpeed = 3.5;
  let reload = 500;
  let bulletSpeed = 7;
  let enemySpeed = 1;
  let maxDivsOnMap = 1;
  let howOftenCreateDivs = 1000;
  let seconds = 0;

  document.querySelector('#timer').innerHTML = `0`;
  let complicator = setInterval(() => {
    enemySpeed += 0.1;
    maxDivsOnMap += 0.1;
    seconds++;
    document.querySelector('#timer').innerHTML = `${seconds}`;
  }, 1000);


  let tank = document.querySelector('#tank');
  let positionX = document.body.scrollWidth / 2 - 30;
  let positionY = document.body.scrollHeight / 2 - 30;
  tank.style.left = positionX + 'px';
  tank.style.top = positionY + 'px';


  let wKeyPressed = false, sKeyPressed = false, aKeyPressed = false, dKeyPressed = false;

  //TANK MOVING
  addEventListener('keydown', keydown);
  function keydown() {
    if (event.code === 'KeyW' && event.repeat === false) {
      wKeyPressed = true;
      let speed = 1;
      let skewSpeed = flatSpeed / 7 * 5;
      let permittedSpeed = aKeyPressed || dKeyPressed ? skewSpeed : flatSpeed;
      let speedIncrease = setInterval(() => {
        if (speed < skewSpeed) {
          speed += skewSpeed / 5;
        } else if (speed >= skewSpeed && speed < permittedSpeed) {
          speed += skewSpeed / 10;
        } else if (speed > permittedSpeed) {
          speed -= skewSpeed / 10;
        }
      }, 75);

      let timer = setInterval(() => {
        aKeyPressed || dKeyPressed ? permittedSpeed = skewSpeed : permittedSpeed = flatSpeed;

        if (positionY > 0) {
          positionY -= speed;
        } else {
          positionY += 10;
          speed = 0;
        }

        tank.style.top = positionY + 'px';
      }, 10);

      addEventListener('keyup', function keyup() {
        if (event.code === 'KeyW') {
          wKeyPressed = false;
          clearInterval(speedIncrease);

          let speedDecrease = setInterval(() => {
            if (speed > 1) {
              speed -= skewSpeed / 5;
            } else {
              clearInterval(speedDecrease);
              clearInterval(timer);
            }
          }, 75);

          removeEventListener('keyup', keyup);
        }
      });
    }
    if (event.code === 'KeyS' && event.repeat === false) {
      sKeyPressed = true;
      let speed = 1;
      let skewSpeed = flatSpeed / 7 * 5;
      let permittedSpeed = aKeyPressed || dKeyPressed ? skewSpeed : flatSpeed;

      let speedIncrease = setInterval(() => {
        if (speed < skewSpeed) {
          speed += skewSpeed / 5;
        } else if (speed >= skewSpeed && speed < permittedSpeed) {
          speed += skewSpeed / 10;
        }
        else if (speed > permittedSpeed) {
          speed -= skewSpeed / 10;
        }
      }, 75);

      let timer = setInterval(() => {
        aKeyPressed || dKeyPressed ? permittedSpeed = skewSpeed : permittedSpeed = flatSpeed;

        if (positionY < document.body.scrollHeight - 60) {
          positionY += speed;
        } else {
          positionY -= 10;
          speed = 0;
        }

        tank.style.top = positionY + 'px';
      }, 10);

      addEventListener('keyup', function keyup() {
        if (event.code === 'KeyS') {
          sKeyPressed = false;
          clearInterval(speedIncrease);

          let speedDecrease = setInterval(() => {
            if (speed > 1) {
              speed -= skewSpeed / 5;
            } else {
              clearInterval(speedDecrease);
              clearInterval(timer);
            }
          }, 75);

          removeEventListener('keyup', keyup);
        }
      });
    }
    if (event.code === 'KeyA' && event.repeat === false) {
      aKeyPressed = true;
      let speed = 1;
      let skewSpeed = flatSpeed / 7 * 5;
      let permittedSpeed = wKeyPressed || sKeyPressed ? skewSpeed : flatSpeed;

      let speedIncrease = setInterval(() => {
        if (speed < skewSpeed) {
          speed += skewSpeed / 5;
        } else if (speed >= skewSpeed && speed < permittedSpeed) {
          speed += skewSpeed / 10;
        } else if (speed > permittedSpeed) {
          speed -= skewSpeed / 10;
        }
      }, 75);

      let timer = setInterval(() => {
        wKeyPressed || sKeyPressed ? permittedSpeed = skewSpeed : permittedSpeed = flatSpeed;

        if (positionX > 0) {
          positionX -= speed;
        } else {
          positionX += 10;
          speed = 0;
        }

        tank.style.left = positionX + 'px';
      }, 10);

      addEventListener('keyup', function keyup() {
        if (event.code === 'KeyA') {
          aKeyPressed = false;
          clearInterval(speedIncrease);

          let speedDecrease = setInterval(() => {
            if (speed > 1) {
              speed -= skewSpeed / 5;
            } else {
              clearInterval(speedDecrease);
              clearInterval(timer);
            }
          }, 75);

          removeEventListener('keyup', keyup);
        }
      });
    }
    if (event.code === 'KeyD' && event.repeat === false) {
      dKeyPressed = true;
      let speed = 1;
      let skewSpeed = flatSpeed / 7 * 5;
      let permittedSpeed = wKeyPressed || sKeyPressed ? skewSpeed : flatSpeed;

      let speedIncrease = setInterval(() => {
        if (speed < skewSpeed) {
          speed += skewSpeed / 5;
        } else if (speed >= skewSpeed && speed < permittedSpeed) {
          speed += skewSpeed / 10;
        } else if (speed > permittedSpeed) {
          speed -= skewSpeed / 10;
        }
      }, 75);

      let timer = setInterval(() => {
        wKeyPressed || sKeyPressed ? permittedSpeed = skewSpeed : permittedSpeed = flatSpeed = 3.5;

        if (positionX < document.body.scrollWidth - 60) {
          positionX += speed;
        } else {
          positionX -= 10;
          speed = 0;
        }

        tank.style.left = positionX + 'px';
      }, 10);

      addEventListener('keyup', function keyup() {
        if (event.code === 'KeyD') {
          dKeyPressed = false;
          clearInterval(speedIncrease)
          let speedDecrease = setInterval(() => {
            if (speed > 1) {
              speed -= skewSpeed / 5;
            } else {
              clearInterval(speedDecrease);
              clearInterval(timer);
            }
          }, 75);
          removeEventListener('keyup', keyup);
        }
      });
    }
  }


  let x;
  let y;

  addEventListener('mousemove', rotate);
  function rotate() {
    x = event.clientX - (parseInt(tank.style.left) + 30);
    y = event.clientY - (parseInt(tank.style.top) + 30);
    let r = 90 - 180 / Math.PI * -Math.atan2(y, x);
    tank.style.transform = `rotate(${r}deg`;
  };

  addEventListener('mousedown', mousedown);
  function mousedown() {
    if (event.which === 1) {
      shooting();
    }
  };

  addEventListener('keydown', keydownSpace);
  function keydownSpace() {
    if (event.code === 'Space') {
      shooting();
    }
  };




  let shotPermission = true;
  function shooting() {
    let gunBurst = setInterval(() => {
      if (shotPermission) {
        startShoot();
      }
    }, 0);

    addEventListener('mouseup', () => {
      clearInterval(gunBurst);
    });

    addEventListener('keyup', () => {
      if (event.code === 'Space') {
        clearInterval(gunBurst);
      }
    });

    function startShoot() {
      shotPermission = false;
      setTimeout(() => {
        shotPermission = true;
      }, reload);

      let bullet = document.createElement('div');
      bullet.className = 'bullet';
      let left = parseInt(tank.style.left) + 15;
      let top = parseInt(tank.style.top) + 15;

      bullet.style.left = left + 'px';
      bullet.style.top = top + 'px';
      document.body.prepend(bullet);


      //GUN RECOIL ANIMATION
      let gunRecoilStep = 1;
      let gunTop = -25;
      let gunRecoilTimer = setInterval(() => {
        if (gunRecoilStep === 1) {
          if (gunTop < -22) {
            gunTop += 0.4;
          } else {
            gunRecoilStep = 2;
          }
        } else if (gunRecoilStep === 2) {
          if (gunTop > -26) {
            gunTop -= 0.3;
          } else {
            gunRecoilStep = 3;
          }
        } else if (gunRecoilStep === 3) {
          if (gunTop < -25) {
            gunTop += 0.2;
          } else {
            clearInterval(gunRecoilTimer);
          }
        }
        document.querySelector('.gun').style.top = gunTop + 'px';
      }, 0)

      let bulletTeleport = true;
      let currentBulletSpeed = bulletSpeed * 2;
      let recoilPower = 1;
      let recoilUp = true;

      if (x >= 0 && y >= 0) {
        if (x >= y) {
          let coefSmall = y / x;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left += getNormalSpeed(currentBulletSpeed, coefSmall);
                top += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left += getNormalSpeed(currentBulletSpeed, coefSmall);
              top += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX > 2) {
              positionX -= (0.2 * recoilPower);
            }
            if (positionY > 2) {
              positionY -= (0.2 * coefSmall * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        } else {
          let coefSmall = x / y;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
                top += getNormalSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              top += getNormalSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX > 2) {
              positionX -= (0.2 * coefSmall * recoilPower);
            }
            if (positionY > 2) {
              positionY -= (0.2 * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        }
      } else if (x < 0 && y >= 0) {
        if (-x >= y) {
          let coefSmall = y / -x;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left -= getNormalSpeed(currentBulletSpeed, coefSmall);
                top += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left -= getNormalSpeed(currentBulletSpeed, coefSmall);
              top += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX < document.body.scrollWidth - 62) {
              positionX += (0.2 * recoilPower);
            }
            if (positionY > 2) {
              positionY -= (0.2 * coefSmall * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        } else {
          let coefSmall = -x / y;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
                top += getNormalSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              top += getNormalSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX < document.body.scrollWidth - 62) {
              positionX += (0.2 * coefSmall * recoilPower);
            }
            if (positionY > 2) {
              positionY -= (0.2 * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        }
      } else if (x < 0 && y < 0) {
        if (-x >= -y) {
          let coefSmall = -y / -x;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left -= getNormalSpeed(currentBulletSpeed, coefSmall);
                top -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left -= getNormalSpeed(currentBulletSpeed, coefSmall);
              top -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX < document.body.scrollWidth - 62) {
              positionX += (0.2 * recoilPower);
            }
            if (positionY < document.body.scrollHeight - 62) {
              positionY += (0.2 * coefSmall * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        } else {
          let coefSmall = -x / -y;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
                top -= getNormalSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              top -= getNormalSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX < document.body.scrollWidth - 62) {
              positionX += (0.2 * coefSmall * recoilPower);
            }
            if (positionY < document.body.scrollHeight - 62) {
              positionY += (0.2 * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        }
      } else {
        if (x >= -y) {
          let coefSmall = -y / x;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left += getNormalSpeed(currentBulletSpeed, coefSmall);
                top -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left += getNormalSpeed(currentBulletSpeed, coefSmall);
              top -= getCoefsmallSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX > 2) {
              positionX -= (0.2 * recoilPower);
            }
            if (positionY < document.body.scrollHeight - 62) {
              positionY += (0.2 * coefSmall * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        } else {
          let coefSmall = x / -y;
          let timer = setInterval(() => {
            if (currentBulletSpeed > bulletSpeed) {
              currentBulletSpeed *= 0.99;
            }
            if (bulletTeleport) {
              for (const i = 0; i < 30 / bulletSpeed; i++) {
                left += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
                top -= getNormalSpeed(currentBulletSpeed, coefSmall);
              }
              bulletTeleport = false;
            } else {
              left += getCoefsmallSpeed(currentBulletSpeed, coefSmall);
              top -= getNormalSpeed(currentBulletSpeed, coefSmall);
            }
            bullet.style.left = left + 'px';
            bullet.style.top = top + 'px';
            bulletCollision(timer, bullet);
          }, 10);

          let recoilInterval = setInterval(() => {
            if (positionX > 2) {
              positionX -= (0.2 * coefSmall * recoilPower);
            }
            if (positionY < document.body.scrollHeight - 62) {
              positionY += (0.2 * recoilPower);
            }
            recoilTankMove(recoilInterval);
          }, 0)
        }
      }

      function recoilTankMove(recoilInterval) {
        tank.style.left = positionX + 'px';
        tank.style.top = positionY + 'px';
        if (recoilUp) {
          recoilPower += 0.2;
          if (recoilPower >= 4) {
            recoilUp = false;
          }
        } else {
          if (recoilPower > 0) {
            recoilPower -= 0.2;
          } else {
            clearInterval(recoilInterval);
          }
        }
      }

      function bulletCollision(timer, bullet) {
        if (left < -30 || top < -30 || left > document.body.scrollWidth || top > document.body.scrollHeight) {
          clearInterval(timer)
          bullet.remove();
        } else {
          for (const i in allDivs) {
            if (parseInt(allDivs[i].style.left) > left - 80 && parseInt(allDivs[i].style.left) < left + 30) {
              if (parseInt(allDivs[i].style.top) > top - 80 && parseInt(allDivs[i].style.top) < top + 30) {
                clearInterval(timer)
                bullet.remove();
                allDivs[i].remove();
                allDivs.splice(i, 1);
              }
            }
          }
        }
      }
      function getCoefsmallSpeed(currentBulletSpeed, coefSmall) {
        return ((currentBulletSpeed * coefSmall) / 2) + (((currentBulletSpeed * coefSmall) / 2) * (1 - coefSmall));
      }
      function getNormalSpeed(currentBulletSpeed, coefSmall) {
        return (currentBulletSpeed / 2) + ((currentBulletSpeed / 2) * (1 - coefSmall));
      }
    }
  }



  ///SAWS



  let allDivs = [];
  let boxCreator = setInterval(() => {
    if (allDivs.length < Math.floor(maxDivsOnMap)) {
      createBox();
    }
  }, howOftenCreateDivs)
  function createBox() {
    let box = document.createElement('div');
    box.className = 'enemy';
    allDivs.push(box);

    let anotherDivs = [];
    let anotherDivsMonitoring = setInterval(() => {
      let buffer = [];
      for (const i in allDivs) {
        buffer.push(allDivs[i]);
      }
      for (const i in buffer) {
        if (buffer[i] === box) {
          buffer.splice(i, 1);
        }
      }
      anotherDivs = buffer;
    }, 0)


    //SPAWN SAW ON MAP
    let spawnerX;
    let spawnerY;
    if (Math.random() > 0.5) {
      if (Math.random() > 0.5) {
        spawnerX = -100;
      } else {
        spawnerX = document.body.scrollWidth + 40;
      }
      spawnerY = Math.floor((Math.random() * document.body.scrollHeight));
    } else {
      spawnerX = Math.floor((Math.random() * document.body.scrollWidth));
      if (Math.random() > 0.5) {
        spawnerY = -100;
      } else {
        spawnerY = document.body.scrollHeight + 40;
      }
    }


    box.style.left = `${spawnerX}px`;
    box.style.top = `${spawnerY}px`;
    box.style.animationDuration = 5 / enemySpeed + 's';
    document.body.prepend(box);

    //CHOSE MOVING DIRECTION
    let directionX = Math.random() > 0.5 ? 'right' : 'left';
    let directionY = Math.random() > 0.5 ? 'up' : 'down';


    //START MOVING
    let boxPosition = { left: spawnerX, top: spawnerY };
    let movingTimer = setInterval(() => {
      const isExist = false;
      for (const i in allDivs) {
        if (allDivs[i] === box) {
          isExist = true;
        }
      }
      if (isExist) {
        moving();
      } else {
        clearInterval(movingTimer);
        clearInterval(anotherDivsMonitoring);
      }
    }, 10);

    function moving() {
      let anotherDivsPosition = [];
      for (const i in anotherDivs) {
        anotherDivsPosition.push({
          left: parseInt(anotherDivs[i].style.left),
          top: parseInt(anotherDivs[i].style.top),
        });
      };
      directionX = checkDirectionX();
      directionY = checkDirectionY();


      function checkDirectionX() {
        if (directionX === 'right') {
          if (boxPosition.left >= (document.body.scrollWidth - 90)) {
            return 'left';
          } else {
            for (const i in anotherDivsPosition) {
              if (boxPosition.left + 80 >= anotherDivsPosition[i].left
                && boxPosition.left + 80 < anotherDivsPosition[i].left + enemySpeed * 2) {
                if (boxPosition.top >= anotherDivsPosition[i].top - 80
                  && boxPosition.top < anotherDivsPosition[i].top + 80) {
                  return 'left';
                }
              }
            }

            return 'right';
          }
        } else if (directionX === 'left') {
          if (boxPosition.left <= 10) {
            return 'right';
          } else {
            for (const i in anotherDivsPosition) {
              if (anotherDivsPosition[i].left + 80 >= boxPosition.left
                && anotherDivsPosition[i].left + 80 < boxPosition.left + enemySpeed * 2) {
                if (boxPosition.top > anotherDivsPosition[i].top - 80
                  && boxPosition.top < anotherDivsPosition[i].top + 80) {
                  return 'right';
                }
              }
            }

            return 'left';
          }
        }
      }

      function checkDirectionY() {
        if (directionY === 'down') {
          if (boxPosition.top >= (document.body.scrollHeight - 90)) {
            return 'up';
          } else {
            for (const i in anotherDivsPosition) {
              if (boxPosition.top + 80 >= anotherDivsPosition[i].top
                && boxPosition.top + 80 < anotherDivsPosition[i].top + enemySpeed * 2) {
                if (boxPosition.left > anotherDivsPosition[i].left - 80
                  && boxPosition.left < anotherDivsPosition[i].left + 80) {
                  return 'up';
                }
              }
            }

            return 'down';
          }
        } else if (directionY === 'up') {
          if (boxPosition.top <= 10) {
            return 'down';
          } else {
            for (const i in anotherDivsPosition) {
              if (anotherDivsPosition[i].top + 80 >= boxPosition.top
                && anotherDivsPosition[i].top
                + 80 < boxPosition.top + enemySpeed * 2) {
                if (boxPosition.left > anotherDivsPosition[i].left - 80
                  && boxPosition.left < anotherDivsPosition[i].left + 80) {
                  return 'down';
                }
              }
            }

            return 'up';
          }
        }
      }

      setTimeout(() => {
        // X MOVING

        if (directionX === 'right') {
          boxPosition.left += enemySpeed;
          box.style.left = `${boxPosition.left}px`;
        } else if (directionX === 'left') {
          boxPosition.left -= enemySpeed;
          box.style.left = `${boxPosition.left}px`;
        }

        // Y MOVING

        if (directionY === 'down') {
          boxPosition.top += enemySpeed;
          box.style.top = `${boxPosition.top}px`;
        } else if (directionY === 'up') {
          boxPosition.top -= enemySpeed;
          box.style.top = `${boxPosition.top}px`;
        }
      }, 0);

      if (boxPosition.left + 80 >= positionX
        && boxPosition.left <= positionX + 60) {
        if (boxPosition.top + 80 >= positionY
          && boxPosition.top <= positionY + 60) {
          clearInterval(anotherDivsMonitoring);
          clearInterval(movingTimer);

          for (const i in allDivs) {
            if (allDivs[i] === box) {
              allDivs.splice(i, 1);
            }
          }
          box.remove();

          document.querySelector('.score').innerHTML
          = 'Your score is: ' + seconds + 's';

          document.querySelector('.help span').innerHTML = Math.random() > 0.5
            ? 'Avoid and destroy saws. Don\'t let them slash you!'
            : `Use 'W', 'S', 'A', 'D', keys
            to control tank and mouseclick to shoot`;
          document.querySelector('#loseBlock').style.display = 'flex';
          isWasted = true;
        }
      }

      if (isWasted) {
        clearInterval(anotherDivsMonitoring);
        clearInterval(movingTimer);
        box.remove();
      }
    }
  }
}
