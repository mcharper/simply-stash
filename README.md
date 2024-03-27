# SimplyStash

## What this project is for

The point of this project is for me to learn the basics of React Native.

Since I'm happy with React and I've written a PWA using it, it makes sense to try this and see what kind of experience PWA users are missing.

Having said I'm hoping the app I'm creating will come in useful.

## What the app is for

<img align="left" style="margin: 0 20 20 0" src="docs/images/label-screen.png">

The app is to help me find stuff I've put into storage.

In my home, stuff is always getting packed away to go into storage, and now and then we need to go and find those things again. No-one else seems equipped or willing to do this so I do it.

I pack things into cardboard boxes so they don’t get damaged and put them out of the way. Finding the box again is the problem. So I give every box a unique Box ID, and I write it on the outside of the box.

I also give each storage location a unique Location ID.

I record the Box ID, its contents, and its current Location ID.
 
At the moment I use a spreadsheet for this purpose. That's OK but it would be nice to have a photo of the box contents and to be able to use my mobile phone to record the info, instead of trying to remember it on the way back to updating the spreadsheet.

## Design

A subgoal was to get better at Figma so I've been using that to design the app.

### UX "Storyframe"

This article by Fabricio Teixeira suggests that before wireframing, we should create a "storyframe".

[Storyframes before wireframes](https://uxdesign.cc/storyframes-before-wireframes-starting-designs-in-the-text-editor-ec69db78e6e4)

Here's mine:

- I’ll be able to manage this information from my mobile phone

- When I pack stuff away in a box:

  - the app will tell me the next box ID or allow me to make one up
  - I will snapshot the contents of the box before I seal it up
  - I will write or say out loud a description of the contents
  - I’ll select a category
  - I’ll select an owner
  - then I’ll seal up and label the box

- When I go to store the box:

  - I’ll put it somewhere
  - I'll write or scan the barcode for the location code

- When I've finished:
  - the app will save the data with the box ID associated with the contents of the box and photos, along with the location code

- When I want to find something again:

	- I’ll search by keyword or part of the description

- When I want to browse what’s in storage:
	
	- I’ll browse by category
  - or I'll browse by owner

### Wireframes

![Wireframes](docs/images/wireframes.png)

### Colour Scheme
 
![Colour Scheme](docs/images/colour-schemes.png)

### Mockups
 
![Mockups](docs/images/mockups.png)

## Running

```npx expo```

On your phone, open the Expo Go app.

Select Scan QR code and scan the one shown on screen.

## Status

Project is at a very early stage ...


