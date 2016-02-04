"use strict"
import moment from 'moment'
import Person from './person'

console.log(moment().format())
let person = new Person("Batou", 35)
console.log("Age " + person.getAge())
