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
I didn't realize it was so easy to add subdomains. In theory you would go to the hosted zone screen and point a certain subdomain to a specific file on a server. My subdomain is [rankpolls.click](https://rankpolls.click)

## HTML and HTTPS
The `<input type="color">` is a good, built in, way to add a color picker to a page if it is needed. I always figured sites that needed them had to find some external api or make their own.<br>
The js `.arc(x, y, b, e, r)` function asks for the starting and ending angles in radians.<br>
The default protocol for an aws server is HTTPS. To get it to encrypt the page being send, just don't specify a port.
