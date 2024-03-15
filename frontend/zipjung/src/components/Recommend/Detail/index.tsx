'use client'
import GoBackButton from '@/components/Common/GoBackButton';
import useRecommendStore from '@/stores/recommend';
import ShareButton from '@/components/Common/Recommend/ShareButton';
import RecommendLikeButton from '@/components/Common/Recommend/RecommendLikeButton';
import RecommendTotalImgList from '@/components/Recommend/Detail/RecommendTotalImgList';
import styles from '@/components/Recommend/Detail/index.module.scss';


function Form() {
    const { ZustandRecommendDetail } = useRecommendStore();

    console.log(ZustandRecommendDetail)

    return (
        <div className={styles.detailContains}>
            <div className={styles.detailContain}>
                <div>
                    <GoBackButton />
                </div>
                <div className={styles.detailDiv}>
                    <div className={styles.detailHead}>
                        <div className={styles.detailId}>
                            추천 {ZustandRecommendDetail?.id}
                        </div>
                        <div className={styles.buttons}>
                            <ShareButton />
                            <RecommendLikeButton key={ZustandRecommendDetail?.id} itemId={ZustandRecommendDetail?.id} />
                        </div>
                    </div>
                    <div>
                        <RecommendTotalImgList />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Form;