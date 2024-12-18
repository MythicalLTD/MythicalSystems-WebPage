# Installation

Follow these steps to install our project:

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or later)
- npm (v6 or later)

## Step 1: Update your system

First, update your system packages:

<CodeBlock code="sudo apt update
sudo apt upgrade -y" language="bash" isExecutable="true" />

## Step 2: Clone the repository

Clone the project repository:

<CodeBlock code="git clone https://github.com/mythicalsystems/awesome-project.git
cd awesome-project" language="bash" isExecutable="true" />

## Step 3: Install dependencies

Install the project dependencies:

<CodeBlock code="npm install" language="bash" isExecutable="true" />

## Step 4: Configure the project

Copy the example configuration file and edit it with your settings:

<CodeBlock code="cp .env.example .env
nano .env" language="bash" isExecutable="true" />

## Step 5: Run the project

Start the development server:

<CodeBlock code="npm run dev" language="bash" isExecutable="true" />

Your project should now be running at `http://localhost:3000`.

