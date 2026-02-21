import { useEffect } from "react";

export function usePersistedState(key, initialValue) {
    const [state, setState] = useState(initialValue);


    useEffect(() => {
        async function loadState() {
            try {
                const storedValue = await AsyncStorage.getItem(key);

                if (!storedValue) {
                    return;
                }

                setState(JSON.parse(storedValue));
            } catch (err) {
                console.error(`Error loading persisted state for key "${key}":`, err);
            }
        }
        loadState();
    }, [key]);

    const setPersistedState = async (value) => {
        try {
            const valueToStore = value instanceof Function ? value(state) : value;

            setState(valueToStore);
            await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (err) {
            console.error(`Error saving persisted state for key "${key}":`, err);
        }
    }
    return [state, setPersistedState];
}