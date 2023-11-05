import { Container } from "./style";

export function Button({ label, loading = false, ...rest }){
    return (
    <Container 
    type="button" 
    disabled={loading}
    {...rest}
    >
        <button>
            {loading ? "carregando..." : label}
        </button>
    </Container>
    )
}