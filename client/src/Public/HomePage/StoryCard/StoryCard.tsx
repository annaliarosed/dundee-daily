import moment from "moment";
import React from "react";
import { StoryType } from "../../../Admin/Containers/CreateStoryPage/helpers";
import { Stack } from "../../../Components/Stack/Stack";
import TownLozenge from "../../../Components/TownLozenge";
import cn from "classnames";
import styles from "./StoryCard.module.scss";

interface StoryCardProps {
  story: StoryType;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => (
  <Stack className={styles.wrapper} gap={3}>
    <div className={styles.photoWrapper}>
      <div
        className={styles.photo}
        style={{
          backgroundImage: `url(${story.imgUrls[0] && story.imgUrls[0]})`,
        }}
      />

      <div className={cn(styles.photoBackground, styles[story.town])} />
    </div>

    <Stack direction="vertical" align="flex-start" justify="center">
      <h3>{story.head}</h3>
      <p className={styles.date}>
        {moment(Number(story.createdAt)).format("MMMM D, YYYY")}
      </p>
      <TownLozenge town={story.town} />
    </Stack>
  </Stack>
);

export default StoryCard;