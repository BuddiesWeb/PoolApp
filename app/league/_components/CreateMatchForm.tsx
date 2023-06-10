'use client'

import * as React from "react"
import {useForm} from "react-hook-form";

export default function Form() {
    const [name, setName] = React.useState<string>("")
    const {register} = useForm()

    async function handleSubmit(e) {
        e.preventDefault()
        const res = await fetch("/api/league/users", {method: "POST", headers: {"Content-Type": "application/json"} , body: JSON.stringify(name)})
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={(e) => setName((prev) => prev = e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}