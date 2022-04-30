import Skeleton from "@material-ui/lab/Skeleton";

const CertificationSkeleton = (): JSX.Element => {

    return (
        <div className="certification-content">
            <Skeleton variant="text" width={120} />
            <Skeleton variant="text" width={120} />
            <Skeleton variant="text" width={120} />
            <Skeleton
                className="experience-picture"
                variant="circle"
                width={50}
                height={50}
            />
        </div>
    );
}

export default CertificationSkeleton;
