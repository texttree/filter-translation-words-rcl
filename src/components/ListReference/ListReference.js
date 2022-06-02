import React, { useEffect, useMemo, useState } from 'react';

import { Box, Popover, Link } from '@material-ui/core';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import { makeStyles } from '@material-ui/core/styles';

export default function ListReference({
  links,
  onClickLink,
  currentChapter,
  currentVerse,
  closed,
  setClosed,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const onClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (closed) {
      onClose();
    }
  }, [closed]);

  return (
    <>
      <Box textAlign={'center'}>
        <ListAltRoundedIcon
          onClick={(event) => {
            setAnchorEl(event.currentTarget);
            setClosed(false);
          }}
          color="inherit"
        />
      </Box>
      <Popover anchorEl={anchorEl} onClose={onClose} open={Boolean(anchorEl)}>
        <ListLinks
          links={links}
          onClickLink={onClickLink}
          currentChapter={currentChapter}
          currentVerse={currentVerse}
        />
      </Popover>
    </>
  );
}

function ListLinks({ links, onClickLink, currentVerse, currentChapter }) {
  const useStyles = makeStyles((theme) => ({
    linkContainer: {
      cursor: 'pointer',
      padding: theme.spacing(1 / 2, 2),
      display: 'block',
    },
  }));
  const classes = useStyles();

  const currentReference = (reference) => {
    return reference[0] + ':' + reference[1] === currentChapter + ':' + currentVerse;
  };

  const listReference = useMemo(
    () =>
      links &&
      links.length > 0 &&
      links.map((el, index) => {
        const reference = el.split(':');
        return (
          <Link
            key={index}
            className={classes.linkContainer}
            onClick={() => onClickLink(reference)}
            color={currentReference(reference) ? 'textSecondary' : 'primary'}
            disabled={currentReference(reference)}
          >
            {el}
          </Link>
        );
      }),
    [links, currentReference]
  );
  return <>{listReference}</>;
}
