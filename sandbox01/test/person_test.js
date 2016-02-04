// ref: https://github.com/power-assert-js/espower-babel
"use strict"

import assert from "power-assert"
import Person from "../src/person"

describe("Person", ()=> {
  let alice = new Person("alice", 3)
  let bob = new Person("bob", 5)
  it("#getAge", ()=> {
    assert(alice.getAge() === 3)
  })
  it("#name", ()=> {
    assert(alice.name === "alice")
  })
  // failed
  it("#mistake", ()=> {
    assert(alice.name === bob.name)
  })
})
