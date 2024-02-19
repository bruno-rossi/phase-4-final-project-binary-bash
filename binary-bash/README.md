# Phase 4 Final Project: binaryBash

**Table of contents:**

- [1. Introduction](#introduction)
- [2. Features](#features)
- [3. Skills learned](#skills)

<a id="introduction"></a>

## 1. Introduction

Welcome to binaryBash, a tool designed for software developers to plan events inspired by the mobile app "Partiful". Within binaryBash, users can register and log in to the platform. They have the capability to create events and browse through existing ones. Each event provides detailed information, including the list of attendees. Hosts have the privilege to delete events, while non-signed-in guests or other logged-in users can express their attendance status by using the "going/not going" button. Additionally, users can customize the application's appearance by choosing between light and dark modes based on their preferences.

The users and events are saved to a SQLite database. Let's bash!

[![image](./Python%20TypeOn%20v2.gif)]

<a id="features"></a>

## 2. Features

- **Login/Signup:** Users have the ability to sign up for a new account, or log into an existing account. The website uses cookies to automatically log in a user who has previously logged in.
- **Creating a new event:** When a user creates an event, they are saved into the database as the "host" for that particular event. Event data can include a title and description, start and end date/time, a location, and a featured image.
- **Guest rsvp:** Users can browse events in the dashboard and open any event to see its details. They can click a "Going" button to rsvp to an event, or "Not going" if they already rsvp'ed by changed their mind.
- **Deleting an event:** Inclement weather? We get it, stuff happens! Hosts can delete an event if they need to cancel it.
- **Light/Dark modes:** Users can select the light/dark mode based on their preference.

<a id="skills"></a>

## 3. Skills learned

Python and Object-Oriented Programming (OOP)

- Building python classes with class properties, validations, and one-to-many relationships between classes:
  The game uses 3 classes, Event, User, and EventUser. The EventUser class is used to create a relationship between users and events, creating a many-to-many relationship.
- Loops and conditionals, list comprehensions.

Databases (SQLite3) and Object-Relational Mapping (ORM):
- Used Flask and SQLAlchemy to write and execute SQL against the database
- Associated tables using foreign keys.

Authentication and authorization:
- Used hybrid properties to add a password property to the User class
- Used bcrypt encrypt users' passwords 

File upload functionality, allowing users to upload images to their events from their desktop.
