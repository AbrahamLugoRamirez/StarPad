import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'star-pad';
  isPlay = false;

  G = new Audio('../assets/G.mp3');
  // G_ = new Audio(
  //   "https://github.com/AbrahamLugoRamirez/StarPad/blob/gh-pages/assets/G.mp3"
  // );

  async play() {
    if (!this.isPlay) {
      console.log(this.G)
      const promise = this.G;
      await this.playSound(promise);
    } else {
      this.G.pause();
    }
    this.isPlay = !this.isPlay;
  }

  async playSound(promise: any) {
    console.log('Promise: ', promise);
    if (promise) {
      await promise.play()
        .then(function () {
          // Automatic playback started!
          console.log('Playing...');
        })
        .catch(function (error: any) {
          console.error('error play', error);
          // Automatic playback failed.
          // Show a UI element to let the user manually start playback.
        });
    }
  }
}
