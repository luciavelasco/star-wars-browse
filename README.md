# star-wars-browse
Browse Star Wars characters and the films they've been in.

This app was set up using Expo.

##### Quickstart:

1. download Expo to your phone
2. on your laptop, open the console, cd into the directory and run "yarn; yarn start;" 
3. scan the QR code in the console using Expo on your phone

### Changes I would like to add had I had more time

**Tidy the code** - Expo has made a lot of decisions about when things should live together versus apart. I would want to:
- split out the `styles` in their own files.
- put the root navigator straight into `App.tsx` because the size of this app doesn't warrant another directory for navigation.
- ADD BETTER TYPES TO EVERYTHING!! (I was a bit shocked at how few types Expo's TypeScript template comes with)

**Load character from URL, not id** - I passed in my own `id` comprised of the index in the array because it seemed to correspond to the url of the character, and I couldn't spot an id on the character's response data. However, I later realised there's a URL key. I'd refactor to follow that.

**Fetch film list** - I didn't have time for that bit.

**Styling!** - I'd:
- add images for the film list (with a template image for new films)
- style character profile text to have a distinction between title, label and value at a minimum
- add pagination to the character list
- and obviously I'd add a Star Wars starry background!

**Reload data less often** - saving people to app state, not component state. Not reloading the person when I can just access it from app state. Have a dictionary of films.

**Bugfixes** - see bugs, below. 

#### Bugs

**Fix scroll** - the character list screen does not currently have scroll implemented.

**Fix character display** - currently, the character profile is not loading successfully. I believe this is something to do with setting state on an unmounted component...

### About the author

This is my first greenfield React Native project, and the first where I've really gotten to grips with some of the most basic aspects of React Native. My previous React Native experience has mostly been stylistic changes to pre-existing projects - several years ago!

However, I have ~5 years of React + TS experience and I love a challenge. Over the past 2 hours I've effectively built my first Native React App, hooray!

I recommend reading through the commit messages for a bit more info on how I approached this.
