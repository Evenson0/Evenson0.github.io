(() => {
  'use strict';

  const dataNode =
    document.getElementById(
      'becoming-daily-data'
    );

  if (!dataNode) {
    return;
  }

  const data =
    JSON.parse(
      dataNode.textContent
    );

  const app =
    document.getElementById(
      'becoming-app'
    );

  const baseurl =
    app?.dataset.baseurl || '';

  const domains =
    new Map(
      (data.domains || []).map(
        domain => [
          domain.id,
          domain
        ]
      )
    );

  const weeks =
    (data.weeks || [])
      .filter(
        week =>
          week.cycle_week &&
          week.start_date &&
          week.end_date
      )
      .sort(
        (a, b) =>
          String(a.start_date)
            .localeCompare(
              String(b.start_date)
            )
      );

  const protocol =
    data.physicalProtocol || {};

  const protocolCards =
    new Map(
      (protocol.cards || []).map(
        card => [
          card.id,
          card
        ]
      )
    );

  let language =
    localStorage.getItem(
      'becoming.language'
    ) || 'fr';

  let selectedDayIndex = 0;
  let lastWeekKey = null;

  const copy = {
    fr: {
      dailyEyebrow:
        'Plan quotidien',

      dailyHeading:
        "Aujourd'hui",

      dailyIntro:
        'Les objectifs de la semaine, transformés en actions concrètes jour par jour.',

      protocolEyebrow:
        'Système permanent',

      protocolHeading:
        'Protocole physique actuel',

      protocolIntro:
        'La routine utilisée actuellement pour construire régularité, force, mouvement quotidien et récupération.',

      week:
        'Semaine',

      today:
        "Aujourd'hui",

      physical:
        'Physique',

      becoming:
        'Becoming',

      noPlan:
        "Le planning quotidien de cette semaine n'a pas encore été défini.",

      noTasks:
        'Aucune tâche supplémentaire prévue.',

      routine:
        'Routine quotidienne',

      training:
        'Musculation',

      openImage:
        "Ouvrir l'affiche",

      schedule:
        'Programme',

      distribution:
        'Répartition',

      recovery:
        'Récupération'
    },

    en: {
      dailyEyebrow:
        'Daily plan',

      dailyHeading:
        'Today',

      dailyIntro:
        'Weekly objectives translated into concrete actions for each day.',

      protocolEyebrow:
        'Permanent system',

      protocolHeading:
        'Current physical protocol',

      protocolIntro:
        'The current routine used to build consistency, strength, daily movement, and recovery.',

      week:
        'Week',

      today:
        'Today',

      physical:
        'Physical',

      becoming:
        'Becoming',

      noPlan:
        'The daily plan for this week has not been defined yet.',

      noTasks:
        'No additional tasks planned.',

      routine:
        'Daily routine',

      training:
        'Strength training',

      openImage:
        'Open poster',

      schedule:
        'Schedule',

      distribution:
        'Distribution',

      recovery:
        'Recovery'
    }
  };

  const el = (
    tag,
    className,
    text
  ) => {
    const node =
      document.createElement(tag);

    if (className) {
      node.className =
        className;
    }

    if (
      text !== undefined &&
      text !== null
    ) {
      node.textContent =
        text;
    }

    return node;
  };

  const localize = (
    object,
    field
  ) => {
    if (!object) {
      return '';
    }

    if (language === 'fr') {
      return (
        object[`${field}_fr`] ||
        object[field] ||
        ''
      );
    }

    return (
      object[field] ||
      object[`${field}_fr`] ||
      ''
    );
  };

  const localIsoDate = () => {
    const now =
      new Date();

    const year =
      now.getFullYear();

    const month =
      String(
        now.getMonth() + 1
      ).padStart(2, '0');

    const day =
      String(
        now.getDate()
      ).padStart(2, '0');

    return (
      `${year}-${month}-${day}`
    );
  };

  const today =
    localIsoDate();

  const formatDate = value => {
    if (!value) {
      return '';
    }

    const date =
      new Date(
        `${value}T12:00:00`
      );

    return new Intl.DateTimeFormat(
      language === 'fr'
        ? 'fr-CA'
        : 'en-US',
      {
        month: 'short',
        day: 'numeric'
      }
    ).format(date);
  };

  const safePath = value => {
    if (!value) {
      return '';
    }

    if (
      /^(https?:|mailto:)/.test(
        value
      )
    ) {
      return value;
    }

    return `${baseurl}${value}`;
  };

  const selectedWeekIndex = () => {
    const buttons = [
      ...document.querySelectorAll(
        '#week-rail button'
      )
    ];

    const selected =
      buttons.findIndex(
        button =>
          button.classList
            .contains(
              'is-selected'
            )
      );

    if (selected >= 0) {
      return selected;
    }

    const current =
      weeks.findIndex(
        week =>
          today >=
            String(
              week.start_date
            ) &&
          today <=
            String(
              week.end_date
            )
      );

    return current >= 0
      ? current
      : 0;
  };

  const currentSelectedWeek =
    () =>
      weeks[
        selectedWeekIndex()
      ] || null;

  const domainTitle = id => {
    if (!id) {
      return copy[language]
        .becoming;
    }

    const domain =
      domains.get(id);

    if (!domain) {
      return id;
    }

    return language === 'fr'
      ? (
          domain.title_fr ||
          domain.title
        )
      : domain.title;
  };

  const weekdayOf = date => {
    if (!date) {
      return '';
    }

    const value =
      new Date(
        `${date}T12:00:00`
      );

    const names = [
      'sunday',
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday'
    ];

    return names[
      value.getDay()
    ];
  };

  const localizedWeekday =
    date => {
      const value =
        new Date(
          `${date}T12:00:00`
        );

      return new Intl
        .DateTimeFormat(
          language === 'fr'
            ? 'fr-CA'
            : 'en-US',
          {
            weekday: 'short'
          }
        )
        .format(value);
    };

  const baselineTasks = () =>
    (
      protocol.daily_baseline ||
      []
    )
      .map(item =>
        protocolCards.get(
          item.card
        )
      )
      .filter(Boolean)
      .map(card => ({
        domain: 'physical',
        time:
          card.duration ||
          card.meta ||
          card.meta_fr ||
          '',
        text:
          localize(
            card,
            'title'
          ),
        baseline: true
      }));

  const trainingTaskForDay =
    day => {
      const strength =
        protocolCards.get(
          'strength'
        );

      if (!strength) {
        return null;
      }

      const weekday =
        day.weekday ||
        weekdayOf(
          day.date
        );

      const session =
        (
          strength.schedule ||
          []
        ).find(
          entry =>
            entry.weekday ===
            weekday
        );

      if (!session) {
        return null;
      }

      return {
        domain: 'physical',
        time:
          localize(
            strength,
            'meta'
          ),
        text:
          localize(
            session,
            'title'
          ),
        baseline: true
      };
    };

  const renderTask = task => {
    const row =
      el(
        'div',
        `becoming-daily-task${
          task.baseline
            ? ' is-baseline'
            : ''
        }`
      );

    const meta =
      el(
        'small',
        'becoming-daily-task__meta'
      );

    meta.textContent =
      [
        domainTitle(
          task.domain
        ),
        task.time
      ]
        .filter(Boolean)
        .join(' · ');

    const text =
      el(
        'strong',
        'becoming-daily-task__text',
        language === 'fr'
          ? (
              task.text_fr ||
              task.text ||
              ''
            )
          : (
              task.text ||
              task.text_fr ||
              ''
            )
      );

    row.append(
      meta,
      text
    );

    return row;
  };

  const renderDaily = () => {
    language =
      localStorage.getItem(
        'becoming.language'
      ) || language;

    const eyebrow =
      document.getElementById(
        'becoming-daily-eyebrow'
      );

    const heading =
      document.getElementById(
        'becoming-daily-heading'
      );

    const intro =
      document.getElementById(
        'becoming-daily-intro'
      );

    if (eyebrow) {
      eyebrow.textContent =
        copy[language]
          .dailyEyebrow;
    }

    if (heading) {
      heading.textContent =
        copy[language]
          .dailyHeading;
    }

    if (intro) {
      intro.textContent =
        copy[language]
          .dailyIntro;
    }

    const week =
      currentSelectedWeek();

    const rail =
      document.getElementById(
        'becoming-day-rail'
      );

    const detail =
      document.getElementById(
        'becoming-day-detail'
      );

    const weekLabel =
      document.getElementById(
        'becoming-daily-week'
      );

    if (
      !week ||
      !rail ||
      !detail
    ) {
      return;
    }

    if (weekLabel) {
      weekLabel.textContent =
        `${copy[language].week} ${String(
          week.cycle_week
        ).padStart(2, '0')}`;
    }

    const weekKey =
      `${week.cycle}:${week.cycle_week}`;

    const days =
      week.days || [];

    if (
      lastWeekKey !==
      weekKey
    ) {
      const todayIndex =
        days.findIndex(
          day =>
            String(day.date) ===
            today
        );

      selectedDayIndex =
        todayIndex >= 0
          ? todayIndex
          : 0;

      lastWeekKey =
        weekKey;
    }

    rail.replaceChildren();
    detail.replaceChildren();

    if (!days.length) {
      detail.append(
        el(
          'p',
          'becoming-daily-empty',
          copy[language]
            .noPlan
        )
      );

      return;
    }

    days.forEach(
      (day, index) => {
        const button =
          el(
            'button',
            'becoming-day-button'
          );

        button.type =
          'button';

        const isSelected =
          index ===
          selectedDayIndex;

        const isToday =
          String(day.date) ===
          today;

        button.classList.toggle(
          'is-selected',
          isSelected
        );

        button.classList.toggle(
          'is-today',
          isToday
        );

        button.setAttribute(
          'aria-pressed',
          String(isSelected)
        );

        const name =
          el(
            'strong',
            '',
            localizedWeekday(
              day.date
            )
          );

        const date =
          el(
            'small',
            '',
            formatDate(
              day.date
            )
          );

        button.append(
          name,
          date
        );

        button.addEventListener(
          'click',
          () => {
            selectedDayIndex =
              index;

            renderDaily();
          }
        );

        rail.append(
          button
        );
      }
    );

    const day =
      days[
        selectedDayIndex
      ];

    if (!day) {
      return;
    }

    const head =
      el(
        'header',
        'becoming-day-detail__head'
      );

    const dayTitle =
      el(
        'h3',
        '',
        language === 'fr'
          ? (
              day.title_fr ||
              day.title ||
              ''
            )
          : (
              day.title ||
              day.title_fr ||
              ''
            )
      );

    const dayDate =
      el(
        'span',
        '',
        formatDate(
          day.date
        )
      );

    head.append(
      dayTitle,
      dayDate
    );

    detail.append(head);

    const tasks = [
      ...baselineTasks()
    ];

    const training =
      trainingTaskForDay(
        day
      );

    if (training) {
      tasks.splice(
        1,
        0,
        training
      );
    }

    tasks.push(
      ...(day.tasks || [])
    );

    if (!tasks.length) {
      detail.append(
        el(
          'p',
          'becoming-daily-empty',
          copy[language]
            .noTasks
        )
      );

      return;
    }

    const stack =
      el(
        'div',
        'becoming-daily-task-stack'
      );

    tasks.forEach(task =>
      stack.append(
        renderTask(task)
      )
    );

    detail.append(stack);
  };

  const renderProtocol =
    () => {
      language =
        localStorage.getItem(
          'becoming.language'
        ) || language;

      const eyebrow =
        document.getElementById(
          'physical-protocol-eyebrow'
        );

      const heading =
        document.getElementById(
          'physical-protocol-heading'
        );

      const intro =
        document.getElementById(
          'physical-protocol-intro'
        );

      if (eyebrow) {
        eyebrow.textContent =
          copy[language]
            .protocolEyebrow;
      }

      if (heading) {
        heading.textContent =
          copy[language]
            .protocolHeading;
      }

      if (intro) {
        intro.textContent =
          copy[language]
            .protocolIntro;
      }

      const target =
        document.getElementById(
          'becoming-physical-protocol'
        );

      if (!target) {
        return;
      }

      target.replaceChildren();

      (
        protocol.cards ||
        []
      ).forEach(card => {
        const article =
          el(
            'article',
            `becoming-protocol-card protocol-${card.id}`
          );

        const header =
          el(
            'header',
            'becoming-protocol-card__head'
          );

        const title =
          el(
            'h3',
            '',
            localize(
              card,
              'title'
            )
          );

        const metaText =
          card.duration ||
          localize(
            card,
            'meta'
          );

        header.append(title);

        if (metaText) {
          header.append(
            el(
              'span',
              '',
              metaText
            )
          );
        }

        article.append(header);

        const image =
          language === 'fr'
            ? card.image_fr
            : card.image_en;

        if (image) {
          const link =
            el(
              'a',
              'becoming-protocol-card__image'
            );

          link.href =
            safePath(image);

          link.target =
            '_blank';

          link.rel =
            'noopener';

          const img =
            document.createElement(
              'img'
            );

          img.src =
            safePath(image);

          img.alt =
            localize(
              card,
              'title'
            );

          link.append(img);

          article.append(link);
        }

        if (
          card.items?.length
        ) {
          const list =
            el(
              'ul',
              'becoming-protocol-list'
            );

          card.items.forEach(
            item => {
              list.append(
                el(
                  'li',
                  '',
                  language === 'fr'
                    ? (
                        item.text_fr ||
                        item.text
                      )
                    : (
                        item.text ||
                        item.text_fr
                      )
                )
              );
            }
          );

          article.append(list);
        }

        if (
          card.distribution
            ?.length
        ) {
          const list =
            el(
              'div',
              'becoming-protocol-distribution'
            );

          card.distribution
            .forEach(item => {
              const row =
                el(
                  'div',
                  'becoming-protocol-distribution__row'
                );

              row.append(
                el(
                  'span',
                  '',
                  localize(
                    item,
                    'title'
                  )
                ),
                el(
                  'strong',
                  '',
                  language === 'fr'
                    ? (
                        item.target_fr ||
                        item.target
                      )
                    : (
                        item.target ||
                        item.target_fr
                      )
                )
              );

              list.append(row);
            });

          article.append(list);
        }

        if (
          card.schedule?.length
        ) {
          const schedule =
            el(
              'div',
              'becoming-protocol-schedule'
            );

          card.schedule.forEach(
            session => {
              const details =
                el(
                  'details',
                  'becoming-protocol-session'
                );

              const summary =
                el(
                  'summary',
                  '',
                  localize(
                    session,
                    'title'
                  )
                );

              details.append(
                summary
              );

              if (
                session.exercises
                  ?.length
              ) {
                const list =
                  el('ul');

                session.exercises
                  .forEach(
                    exercise => {
                      list.append(
                        el(
                          'li',
                          '',
                          exercise
                        )
                      );
                    }
                  );

                details.append(
                  list
                );
              }

              schedule.append(
                details
              );
            });

          article.append(
            schedule
          );
        }

        target.append(
          article
        );
      });
    };

  const renderAll = () => {
    renderDaily();
    renderProtocol();
  };

  renderAll();

  document
    .querySelectorAll(
      '[data-language]'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          window.setTimeout(
            renderAll,
            0
          );
        }
      );
    });

  document
    .querySelectorAll(
      '#week-rail button'
    )
    .forEach(button => {
      button.addEventListener(
        'click',
        () => {
          window.setTimeout(
            renderDaily,
            0
          );
        }
      );
    });

  [
    'previous-week',
    'next-week'
  ].forEach(id => {
    document
      .getElementById(id)
      ?.addEventListener(
        'click',
        () => {
          window.setTimeout(
            renderDaily,
            0
          );
        }
      );
  });
})();
