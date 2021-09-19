---
title: How to Green Screen in Guild wars 2
excerpt: Have you ever wondered how you can get a green screen inside Guild Wars 2 for when you take screenshots or record video? Today I show you the secret ReShade shader that I use to do my chromakeying.
publishedAt: 2021-09-19
seo:
    title: How to Green Screen in Guild wars 2 - Chroma Key Guide
    description: A simple guide on how you can use ReShade to make your own Green Screen inside Guild Wars 2.
---

# How to Green Screen in Guild wars 2

One question I have been getting *a lot*, is "how do you green screen your character like that?" And today that is what I will show you. Whether you have a blue Guardian that needs a green screen or a green Sylvari that needs a blue screen, both are possible thanks to the amazing work from everyone's favorite shaman, [that_shaman](https://twitter.com/that_shaman).

Let's dive into it.

<youtube-player id="VqfO81SY3Og"></youtube-player>

## Installing Reshade

The first thing you want to do is go to [reshade.me](http://reshade.me) and click the download button. Currently they're on version 4.9.1.

Once downloaded you run the installer and choose `Click here to select a game and manage its Reshade Installation`. ReShade will now search for games on your PC. If you do not see Guild Wars 2 in the list, then click the browse button and navigate to your Guild Wars 2 installation Directory and choose the `GW2.exe` file.

Now comes the most complicated part of the installation process: What version of DirectX to choose? 

With DirectX 11 support coming to Guild Wars 2 in just a few days it is important you make the right choice here.

1. If you have enabled DirectX 11 or are running D912PXY, then you should choose `Direct3D 10/11/12`. 
2. If your Guild Wars 2 is completely stock you're most likely running DirectX 9, in which case you should choose `Direct3D 9`.

It might be that DirectX 11 becomes the default for Guild Wars 2 in the future, in which case you should check your in-game settings to see what DirectX version you're running.

## Installing a custom shader

After making that difficult DirectX choice you will be asked which shaders you want to install. This is the point where we can also add some custom shaders.

Copy this link to that_shamans shader pack: [https://github.com/thatshaman/ReShadeShaders/archive/refs/heads/main.zip](https://github.com/thatshaman/ReShadeShaders/archive/refs/heads/main.zip) and paste in the field `Enter ZIP download link to custom repository here`. After that, you click `Add` followed by `Ok`.

Depending on which shader packs you have chosen besides the that_shaman pack, then you will be asked which shaders from each pack you actually want to install. Generally, you can simply click `Ok` to all of these.

ReShade should now be installed and working. Startup Guild Wars 2 and you should see a little info box at the top of your screen, this will confirm that ReShade is working properly.

## Using the shader

Once inside Guild Wars 2, you want to click the `Home` button on your keyboard. This will bring up the ReShade settings. Here you should see a long list of all the shaders you have installed.

The shader we will be focusing on is the one called `that_shaman_chromakey`. Click the checkbox next to this shader. This should make some far distances in the background become green. Let's go over the settings.

The first setting `Chroma Key Color` is the color of your greenscreen. You want to ensure this is a different color from your subject. By default, it is as green as can be. Sometimes you do want to change it to blue, this is mostly if you have green or green-ish shades on your subject.

The `Near Plane` is essentially a big flat surface between the camera and your subject. Changing this setting will allow you to filter out nearby objects, characters, and NPCs that you do not want in the foreground.

The `Far Plane` works the same way as the `Near Plane`, but it is placed behind your subject. This allows you to filter out objects, characters, and NPCs in the background. 

Usually, with chromakey shaders for ReShade, this is where the settings end. This causes a problem as you might be able to see, that, the ground is not green, which means you don't have a full, proper, greenscreen.

That_shaman is smart and he added a feature to remove flat surfaces. Simply turn on the checkbox `Remove Flat Surfaces`. This is also where a limitation comes in. In order to do a perfect greenscreen, you want to ensure your subjects are standing on a flat surface with a wide space around it.

Now comes to the hard part of tweaking, the flat surface settings. These are complicated and it's difficult to communicate how to use them properly. I've played around a lot with them and I will try to give you my best recommendations for them, but this will vary a lot, based on the location in-game, camera angle, subject, and more. So be ready to play around with them yourself for the best result.

The easiest way to explain how to use the `Flat Surface Normal` is for you to try to pick a random color, until more of the floor is turned into the chromakey color that you chose previously.

From there you want to tweak the `Flat Surface Sample Count`. This setting allows you to slightly refine the edges around your subject. In my experience you want to keep this number as small as possible, sometimes turning it up will yield a better result though. Turning it up all the way usually adds a slight offset around your subject, giving you a bad cut out.

You might be concerned about the floor not entirely being your chromakey color quite yet, this is normal. To fix this you want to adjust the `Flat Surface Vertical Screen Cutoff`. For the best results you want to start low and slowly move the slider higher, just until it covers all the ground below your character and not further. If you turn it too far, you can end up with parts of your subject turning into the chromakey color, which is obviously not desirable.

As I mentioned, these are difficult to get right and requires tweaking, but don't give up, just keep trying. Sometimes it also helps to angle your camera slightly differently or finding a more flat surface for your subject to stand on.

## Removing the color

There are a lot of different programs out there you can use to remove the color from a green-screened video or image. I will just show you the quick method I use in Premiere Pro, my video editor of choice. You can always check YouTube if you want to learn how to use other programs to do this. Simply search for "how to chroma key in" and then whatever program you want to use.

In Premiere Pro simply:

1. Drag your footage onto your timeline.
2. Go to the `Effects` tab and search for `Ultrakey`.
3. Drag the effect onto your footage.
4. Click the eyedropper under `Ultrakey` in the footage effects.
5. Click the green background.

And it's that simple. You can now have your character on top of any other footage.

## Conclusion

Now that you know how to use this shader all you have to do is take some screenshots and record some footage. If you need some tips for that I have another guide on [how to take better screenshots in Guild Wars 2](https://rediche.stream/articles/how-to-take-better-screenshots-in-gw2) that I highly recommend you to check out.

I am Rediche and I stream on [twitch.tv/rediche](http://twitch.tv/rediche) every Monday, Thursday, and Friday.