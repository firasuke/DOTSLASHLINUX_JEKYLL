---
layout: p
title: Optimal mpv Configuration
date: 2017-03-31
author: Firas Khalil Khana
imgsrc: /r/i/mpv.png
imgalt: mpv
readtime: 2 minutes
tags: popular
---
In this article I'll show you how to setup mpv and arm it up with the best mpv.config file (in terms of performance and resource usage).
<br/>
<br/>
<hr/>
<h3 id="Installation">1- Installation</h3>
<br/>
Gentoo Linux:

<pre><code class="language-bash">emerge --ask --update --newuse media-video/mpv</code></pre>
<br/>
Void Linux:

<pre><code class="language-bash">xbps-install -S mpv</code></pre>
<br/>
Arch Linux:

<pre><code class="language-bash">pacman -Syu mpv</code></pre>
<hr/>
<h3 id="Setup_Configuration_Files">2- Setup Configuration Files</h3>
<br/>
To setup your local mpv configuration files, navigate to your home directory. From there you'll have to go to the hidden folder .config. Create a directory called mpv (if it doesn't exist) and enter it:
<pre><code class="language-bash">mkdir ~/.config/mpv
cd ~/.config/mpv</code></pre>
<br/>
Now we'll have to create two files. The first being mpv.conf which controls mpv's settings and the second being input.conf which controls mpv's key bindings:
<pre><code class="language-bash">touch ~/.config/mpv/mpv.conf
touch ~/.config/mpv/input.conf</code></pre>
<hr/>
<h3 id="mpv's_Settings">3- mpv's Settings (mpv.conf)</h3>
<br/>
After setting up the previous files, it's time to do some configuration! I've got a nice configuration file to arm mpv with. For maximizing quality over performance choose the following settings:
<pre class="line-numbers" data-line="12"><code class="language-properties">profile=opengl-hq
scale=ewa_lanczossharp
cscale=ewa_lanczossoft
dscale=mitchell
scale-antiring=0.7
cscale-antiring=0.7
dither-depth=auto
correct-downscaling=yes
sigmoid-upscaling=yes
deband=no
volume-max=100
hwdec=auto</code></pre>
<br/>
However, if you were on a laptop and wanted the best quality settings with the least CPU usage, you have to enable VAAPI (for example on your integrated Intel Graphics Card), which will result in lower resource usage, smaller memory footprint and the videos will still look as good. To do that just change line 12 from hwdec=auto to hwdec=vaapi:
<pre class="line-numbers" data-line="12"><code class="language-properties">profile=opengl-hq
scale=ewa_lanczossharp
cscale=ewa_lanczossoft
dscale=mitchell
scale-antiring=0.7
cscale-antiring=0.7
dither-depth=auto
correct-downscaling=yes
sigmoid-upscaling=yes
deband=no
volume-max=100
hwdec=vaapi</code></pre>
<br/>
Please do note that using <mark>vo=opengl-hq</mark> is deprecated. Use <mark>profile=opengl-hq</mark> instead.
<hr/>
<h3 id="mpv's_Key_Bindings">4- mpv's Key Bindings (input.conf)</h3>
<br/>
You can really tweak this file to your liking. I didn't tamper with the default keybindings for mpv, but the mousewheel seeking through the video thing had me go nuts. So I remapped the mousewheel to control the video's volume:
<pre><code class="language-properties">MOUSE_BTN3 add volume 5
MOUSE_BTN4 add volume -5</code></pre>
<br/>
In my case <mark>MOUSE_BTN3</mark> and <mark>MOUSE_BTN4</mark> referred to scrolling up and down respectively.
