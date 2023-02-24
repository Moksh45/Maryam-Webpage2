import SkeletonElement from "./SkeletonElement";

const SkeletonSearchPage = () =>{
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-searchPage">
                <SkeletonElement type = "title"/>
                <SkeletonElement type = "text"/>
                <SkeletonElement type = "thumbnail"/>
                
            </div>
        </div>
        )
}

export default SkeletonSearchPage;