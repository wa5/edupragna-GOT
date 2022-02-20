
enum LodingStatus{
    beforloading=" beforloading",
    loading="  loading",
    afterloading="  afterloading"
}

const videotatus={
    [LodingStatus.beforloading]:"beforloading"
}

const iLoading=(state:LodingStatus)=>state===LodingStatus.loading
console.log(iLoading(LodingStatus.loading))