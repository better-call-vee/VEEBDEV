/**
 * 1. e.target.[name of the input field].value
 * 
 * 2. use form action and formData in the action handler. formData.get('name of the input field)
 * 
 * 3. controlled component. one per each field.
 * 
 * 4. handle all controlled field on one state object 
 * const [formdData, setFormData] = useState({
 *     name: '',
 *     password: '',
 *     phone: '',
 * })
 * 
 * 5. uncontrolled using useRef
 */