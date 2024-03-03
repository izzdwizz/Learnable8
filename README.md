# Learnable Task 8: Telephone Package

## Overview

This package provides a simple telephone class with three main functionalities: adding a phone number, removing a phone number, and dialing a phone number. It also utilizes the observer pattern to notify registered observers when a phone number is dialed.

## Installation

There are no special installations required for this one as usual. Simply include the provided JavaScript code in your project or replit or wherever you work.

## How to use

Create an instance of the `Telephone` class:

  `
   const telephone = new Telephone();`
   
Add phone numbers using the addPhoneNumber method:

`telephone.addPhoneNumber("1234567890");`
`telephone.addPhoneNumber("2345678901");`

Remove a phone number using the removePhoneNumber method:

`telephone.removePhoneNumber("1234567890");
Dial a phone number using the dialPhoneNumber method:`

`telephone.dialPhoneNumber("2345678901");`

Add and remove observers:
```
const chike = new PhoneNumberObserver();
const obioma = new SpecialPhoneNumberObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.removeObserver(observer1);
