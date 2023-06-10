'use client'

import * as React from "react"
import {handleSubmit} from "./SubmitForm"

export default function Form() {
    const [name, setName] = React.useState<string>("")

    return (
        <form action={handleSubmit(name)}>
            <input type="text" name="name" onChange={(e) => setName((prev) => prev = e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}