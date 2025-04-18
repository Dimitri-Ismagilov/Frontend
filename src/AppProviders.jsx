import { ClientsProvider } from "./contexts/ClientsContext"
import { MembersProvider } from "./contexts/MembersContext"
import { ProjectsProvider } from "./contexts/ProjectsContext"

const AppProviders = ({children}) => {
    return(
        <ClientsProvider>
            <MembersProvider>
                <ProjectsProvider>
                    {children}
                </ProjectsProvider>
            </MembersProvider>
        </ClientsProvider>
    )
}

export default AppProviders