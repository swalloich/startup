# startup - Ranker
I want to make a site that could be used for ranked voting or polls. This could be used in anything ranging from a team making decisions on some proposed plans for a project, to influencers using it as a fun way to interact with their audience. The term "ranked polls" is meant to indicate more of a voting system than a poll. Participants would choose multiple options and either through a point system, or by elimination of less popular options, a winner would be decided. A limitation of a free version could be the number of active polls non-owners can see and interact with. An live preview of which options are winning would be available if the poll owner wants it.<br><br>

## Homepage Mockup
![an image showing a mockup of the homepage](https://github.com/swalloich/startup/blob/main/startUpSpec-home.png)<br>
## Premium Page Mockup
![an image showing a mockup of the premium page](https://github.com/swalloich/startup/blob/main/startUpSpec-prem.png)<br>
## AWS
The command `ssh -i <path to .pem file> ubuntu@<aws server ip>` can be used to ssh into the console.<br>
The IP of the page is 18.224.47.48

## Route 53
I didn't realize it was so easy to add subdomains. In theory you would go to the hosted zone screen and point a certain subdomain to a specific file on a server. My domain is [rankpolls.click](https://rankpolls.click)

## HTML and HTTPS
The `<input type="color">` is a good, built in, way to add a color picker to a page if it is needed. I always figured sites that needed them had to find some external api or make their own.<br>
The js `.arc(x, y, b, e, r)` function asks for the starting and ending angles in radians.<br>
The default protocol for an aws server is HTTPS. To get it to encrypt the page being send, just don't specify a port.

## HTML and Simon
I thought the `svg` tag was interesting. I don't understand anything about using it, but It seems like a useful tool to use. I'm now wondering if I can achieve a similar effect to what was used in the simon buttons using css.

## CSS Practice
The `box-shadow` property can be used to create shadows behind elements. There are 5 properties for two different parts. EG: `box-shadow: 0px 0px 0px 0px gray, 0px 0px 0px 0px gray` The first four determine width, offset, fade, another I'm not sure about, and color. The bullet points can be removed from a `ul` element, and all the properties that make a `ul` look how it does can be removed using things such as `display: flex` and so on.

## CSS Flex
I didn't realize how many otherwise pretty complicated problems flex makes super easy. Need something centered vertically? Use flex. Want the width of something to be "whatever is left"? Use flex. Also, I you need to set a lot of things to be a specific width if you want a nav link to look good when it is hovered over.
