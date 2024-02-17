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

- **Login/Signup:** description.
- **Creating a new event:** After you enter an input sentence, the game calculates the difference between the provided sentence and your input. Correct characters are displayed in green, and mistakes are displayed in red. If you missed a key, it's displayed with a minus sign ("-"), and if you aded an extra key, it's displayed with a plus sign ("+").
- **Guest rsvp:** desc.
- **Deleting an event:** desc.
- **:** desc
- **List all levels:** desc.

<a id="skills"></a>

## 3. Skills learned

Python and Object-Oriented Programming (OOP)

- Building python classes with class properties and one-to-many relationships between classes:
  The game uses 3 classes, Player, Game, and Level. Player-Game and Level-Game are one-to-many relationships. Player-Level are many-to-many relationships.

- Working with primary data types in Python: strings, integers, floats, lists, dictionaries.
- Instance methods, and class methods, lambda functions.
- Loops and conditionals, list comprehensions.

Databases (SQLite3) and Object-Relational Mapping (ORM):

- Writing and executing SQL against a database
- Create/Drop tables, insert/update/delete table rows.
- Associated tables using foreign keys.

Using external libraries with my code:

- Diff checker library: difflib library
- Color printer: termcolor library
- Timer: time library
