Student Roster — React Native / Expo
Project Description

This project is a simple React Native application built with Expo and TypeScript. It demonstrates the use of functional components, JSX, props, conditional rendering, array mapping, state, and React keys.

The application displays a student roster where each student is represented by a reusable StudentCard component. The roster also includes a button that reverses the order of the students.

Components
StudentCard

StudentCard is a reusable functional component located in:

components/StudentCard.tsx


It receives the following props:

name — the student's name

course — the student's course

units — the number of units the student is taking

isFullLoad — a boolean indicating whether the student has a full load

The props are received using destructuring in the function signature.

The component displays the student's information using React Native's View and Text components.

It also uses conditional rendering:

{isFullLoad && <Text>Full Load</Text>}


This means that the Full Load label is only displayed when isFullLoad is true.

StudentRoster

StudentRoster is the parent component located in:

components/StudentRoster.tsx


It contains the student data and uses .map() to create one StudentCard for every student in the array.

Each card uses the student's unique ID as its React key:

<StudentCard
  key={student.id}
  name={student.name}
  course={student.course}
  units={student.units}
  isFullLoad={student.isFullLoad}
/>


The component also displays the number of students using a JSX expression and template literal:

<Text>{` ${roster.length} Studnets `}</Text>


A button is provided to reverse the roster:

<Button
  title="revers"
  onPress={() => useRoster([...roster].reverse())}
/>

React Key Experiment

As part of the activity, the key prop was temporarily changed from:

key={student.id}


to an array index.

Using the index as a key can cause problems when the order of items changes. When the roster is reversed, the positions of the students change, but the indexes remain the same. React may therefore reuse components based on their position instead of correctly identifying the student they represent.

Using the student's unique ID is more appropriate because the ID stays associated with the same student even when the order of the roster changes.

After observing the behavior, the implementation was restored to:

key={student.id}

Project Structure
.
├── components/
│   ├── StudentCard.tsx
│   └── StudentRoster.tsx
├── assets/
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── tsconfig.json
├── AGENTS.md
├── LICENSE
└── README.md

Technologies Used

React Native

Expo SDK 57

TypeScript

React

JSX

How to Run the App
1. Install dependencies

Make sure Node.js and Expo are installed, then run:

npm install

2. Start the Expo development server

Run:

npx expo start

3. Open the application

After the development server starts, the application can be opened using an available Expo environment such as:

Expo Go

Android emulator

iOS simulator

Web browser

Expected Behavior

When the application starts, it displays the number of students and their individual information.

Students with isFullLoad: true display a Full Load label.

Pressing the reverse button changes the order of the student cards. The cards use student.id as their stable React key so that React can correctly track each student when the order changes.

Learning Objectives

This project demonstrates:

Creating functional React Native components.

Passing and destructuring props.

Rendering data using JSX.

Conditional rendering with &&.

Rendering lists using .map().

Using stable React keys.

Managing component state with useState.

Updating and reversing an array in React state.

Understanding the difference between array-index keys and unique ID keys.
