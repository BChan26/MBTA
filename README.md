# MBTA 65 Bus Tracker
I will be making an API/Axios call to the MBTA (Massachusetts Bay Transportation Authority)'s "V3 API" for schedules, alerts, and real-time information.

## Website 
[65bus.netlify.app](https://65bus.netlify.app/ "Link to 65 Bus Tracker Website")
![image](https://i.postimg.cc/jq3nPDbk/65-Bus-Tracker-Page.png)

### Final Product
My goal was to create a tracker for the 65 bus, a route I use to go to the local library. 

I have shortcuts to 2 specific stops I use the most:
- My pickup spot going inbound (to the library)
- My pickup spot going outbound (back home)

I also have a component that allows you to pick any bus stop along the 65 and see how many minutes away the next bus is.

#### Big Takeaways/Challenges
- This project forced me to review the fundamentals of React and Hooks to truly understand how each component and prop interacts.
- Each API out there has data structured differently. Compared to my first Weather Forecast project, the MBTA's API had more data to work with, but it was less intuitiveness to navigate (AKA it was very dense info to parse out)
- Changing the API's military 24-hour time into "X Minutes Away" being displayed required deconstruction, math between strings and numbers (parseInt), and pseudo-coding out the logic to implement this.

#### Extensions
With more time, I'd love to:
- Make this scaleable to all bus/train lines in the MBTA
- Sync an AXIOS call's value into another mapped out Axios call to display the intersection name instead of a stop ID (which isn't intuitive)
- Connect each line to a live map with the stops, for better user-interactivity

#### 3rd Party Resources Used
- Coding Languages/Libraries Needed: HTML, CSS, Javascript, and React (18.2)
- API: https://api-v3.mbta.com
- Image Editor: https://pixlr.com/
- Image Uploading: https://postimages.org/
- Website Deployment: https://app.netlify.com/
- W3Schools React Tutorial: https://www.w3schools.com/react/ 
- Getting Current Time: https://reactgo.com/javascript-get-time/ 

#### Installation and Feedback
- After forking on Github, you can git clone "URL" in your terminal (with the URL from the search bar)
- You will need to npm install react-router-dom and npm install axios for this to work properly 
- If you're interested in helping me with my extenions, feel free to reach out at bchan26@bu.edu

#### Credits
- The Teaching Team (Jeremy, Brittany, Tiffany, Kristina, Tylus)
- Robert & Brittany (for helping me save a value in a UseState hook to make a dynamic axios call)