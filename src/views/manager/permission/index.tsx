import { Card} from "antd"
import PermissonTable from "./permissionTable";

const PermissionInterface = () => {

    return (
        <>
            <Card className="users-card">
                <PermissonTable />
            </Card>
        </>
    )
}

export default PermissionInterface