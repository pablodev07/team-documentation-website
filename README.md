# VISIONARIO 
https://team-documentation-website.vercel.app/

### THE BIBLE OF A DEVELOPMENT AND UX TEAM

A project created with Next.js and Chakra UI for components and styling, along with some small custom CSS and with Vite as a server development tool.

## What's this?

A website for internal use of a team, where all documentation, useful links, information about projects and about team members are poured into. The initial idea was answering WHO, WHAT, WHY and HOW and from that point on, a journey to make this website a reality began. I pushed forward this website because I realized that all the information and knowledge we had for our daily tasks were spread in different platforms, tickets or documents. Everything should be centralized in our personal hub. VISIONARIO is a spanish word, that translates to VISIONARY and we thought of this name because we have a clear vision for our team culture and we want to share it with the rest of the company and other team members.

## Who designed this?

This website has the color palette of the company where we created this site for. It was designed by the UX Lead, building from the Chakra UI webkit available on Figma.

## How is this project structured?

### Team members
Each team member has a unique ID assigned (`number`). Such ID is used in PODs for projects and to open its own bio.

### Projects
The same criteria goes for projects, which they also have a unique ID assigned to them.

### Dynamic routes
"Who We Are" and "Portfolio" have its own dynamic .jsx file. If you enter the route /who/`number` or /portfolio/`number`, it should redirect you to the corresponding member or project as long as it is defined in its corresponding .json with their data.

### No backend
Yes, this project has all its data mocked in .json. The idea for the future is to develop a CMS to load all the data of the team, descriptions, useful links, etc. on demand.
