import {View, Text} from "react-native"

type props = {
    name: string ;
    course: string ;
    units: number ;
    isFullLoad: boolean ;
}

export function StudentCard({name,course,units,isFullLoad}:props) {
    return (
        <View>
            <Text>{name}</Text>
            <Text>{course}</Text>
            <Text>{units}</Text>
            {isFullLoad && <Text>Full Load</Text>}
        </View>


    );
}