import { denormalize, normalize, schema } from 'normalizr';
const data = [{ id: '123', name: 'Jim' }, { id: '456', name: 'Jane' }];
const userSchema = new schema.Entity('byId');
const userSchema2 = new schema.Entity('AllIds');

//const userListSchema = new schema.Array(userSchema);
// or use shorthand syntax:
const y={userSchema,userSchema2}
const userListSchema = [userSchema2];

const normalizedData = normalize(data, userListSchema);

const Narm:React.FC=()=>{
console.log("0000",normalizedData)

    return  (<>
jjjk
    </>)
}

export default Narm