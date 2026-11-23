# news-image-20261123

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/taufan98/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/taufan98/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image summing up the world news of **Monday 23 November 2026**, built for the make.fun competition [news-image-20261123](https://make.fun/bounty/news-image-20261123) ("Sum up 23 November's world news in one image").

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The image

A newspaper front page for **Monday 23 November 2026**, drawn with Python (PIL) from the day's reporting:

1. **COP31 collapses without a deal** — the EU rejects a text silent on fossil fuels in Antalya; the first climate-summit collapse since 2009, and the longest summit on record.
2. **Tankers ablaze in the Strait of Hormuz** — Iran's navy sets tankers alight as the Iran war widens; Houthis claim strikes on a Saudi oil refinery, at least 6 injured.
3. **Russian drone hits flats in the Kyiv region** — at least 14 people missing, Zelenskiy says, as rescuers search the wreckage.
4. **South Korea's education minister quits over AI exam cheating** — the minister resigns as an AI cheating scandal grows.
5. **India posts a record 720/9d in Wellington** — a record Test total against New Zealand at the Basin Reserve.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. No network; deterministic — every run writes the same bytes.

## License

MIT — see `LICENSE`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=va8excfs&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
