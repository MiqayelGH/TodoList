function CreateButton({children, ...props}) {
        return (
            <button {...props}>{children} </button>
        )
}

export default CreateButton