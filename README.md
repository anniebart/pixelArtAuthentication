# pixelArtAuthentication
<img src="https://www.anniebartholomew.com/screen-shot-2020-12-11-at-1.42.10-pm.png">

## What exactly is this project?
In November of 2020, I came across [this](https://passwords.ai/) website that documented a three-day meeting of a group of artists, designers and technologists. The purpose of this meeting was to reimagine how machine learning might be able to be used in authentication- but not using traditional methods like biometric data.
<br>
I decided to implement my own alternative to traditional authentication, but without using machine learning. Being an artist, I wanted to use a visual method of authentication. I landed on using pixel art as the authentication method. Users can select a color for each tile and create a sequence of tile positions that would serve as their authentication. The sequence can include up to 25 tiles, but users have to remember, the order in which the tiles are placed is important. 

Each tile is an input with a specified value - once the user is satisied with their sequence, they can save it to be used as their authentication. This concatenates the values of the sequence. 

## Uhhh...what about security?
This is still very much a work in progress. The next step is add encryption/hashing/salting to the stored password. Other areas for exploration and further work include reimagining what a username is- is it pixel art as well? Or something else? And how can this authentication method be protected against sneaky people peering over the shoulder of the user as they input their "password"?



