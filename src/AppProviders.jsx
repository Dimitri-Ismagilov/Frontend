import { AuthProvider } from "./contexts/AuthContext"
import { ClientsProvider } from "./contexts/ClientsContext"
import { MembersProvider } from "./contexts/MembersContext"
import { ProjectsProvider } from "./contexts/ProjectsContext"

const AppProviders = ({children}) => {
    return(
        <AuthProvider>
            <ClientsProvider>
                <MembersProvider>
                    <ProjectsProvider>
                        {children}
                    </ProjectsProvider>
                </MembersProvider>
            </ClientsProvider>
        </AuthProvider>
    )
}

export default AppProviders