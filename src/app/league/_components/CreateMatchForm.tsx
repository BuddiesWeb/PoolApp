export default function Form() {
    async function handleSubmit() {
        'use server'
        // ...
    }


    return (
        <form action={handleSubmit}>
            <input type="text" name="name" />
            <select name="select">
                <option>AHoj</option>
                <option>jjjjj</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}