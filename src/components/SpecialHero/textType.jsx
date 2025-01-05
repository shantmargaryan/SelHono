import { useTypewriter, Cursor } from 'react-simple-typewriter'

function TextType({ text = "" }) {
    const [typeEffect] = useTypewriter({
        words: [text],
        typeSpeed: 70
    })
    return (
        <>
            {typeEffect}
            < Cursor cursorColor='#CDA274'/>
        </>
    )
}

export default TextType